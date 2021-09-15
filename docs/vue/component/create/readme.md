### 组件的渲染流程流程
* 上边已经说过组件会通过createElement来进行创建，这个时候如果tag能在options.components中找到那么则是一个组件节点，对于组件节点我们会通过createComponent来进行创建。首先我们想一下组件vnode和普通的vnode的区别点。
* 组件vnode出现的意义是为了复用。
* 组件vnode和普通vnode的区别：
1. 拥有componentOptions配置，
2. 是一个构造函数继承于Vue，并且拥有各种hook用于在不同阶段进行触发。
### createComponent的具体实现
* 1: 创建组件的构造函数
* 2: 给data上增加hook的各种钩子
* 3: 实例化组件vnode返回
``` js
function createComponent(Ctor,data,context,children) {
  if (isUndef(Ctor)) {
    return
  }
  const baseCtor = context.$options._base // 拿到大Vue,也是组件构造函数继承的父类
  if (isObject(Ctor)) {
    // 构造子类构造函数
    Ctor = baseCtor.extend(Ctor);
  }
  data = data || {}
  // 安装组件vnode钩子
  installComponentHooks(data)
  // 构造组件vnode返回
  let vnode = new VNode(`vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
    data, context, {
      Ctor,
      tag,
      children
    }
  )
  return vnode
}
```
### Vue.extend的实现
* 参数：组件的定义。
* 结果：一个构造函数。
* 注意项：实现缓存，同一个组件定义，不会重复执行，直接返回即可
* 注意项：要实现同Vue相同的功能。
``` js
  Vue.extend = function (com) {
    let vm = this
    let cacheKey = vm.cid
    let cache = com.cachedData || com.cachedData = {}
    if (chache[chacheKey]) {
      return chache[chacheKey]
    }
    // 定义子类的构造函数
    const Sub = function VueComponent (options) {
      this._init(options)
    }
    // 使子类的prototype指向Vue的prototype
    Sub.prototype = Object.create(vm.prototype)
    Sub.prototype.constructor = Sub
    Sub.cid = cid++
    // 合并options上的配置
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
      // 设置Vue.component,Vue.filter,Vue.directive
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type]
      })
    )
    cache[chacheKey] = Sub
    return Sub
  }
```
### installComponentHooks的实现
* 目的：给组件的data上安装一些特定的钩子，
* 参数：data对象
* 返回： null
* tip：注意本身data上就有钩子，要注意合并
* tip: 防止重复mergeHook,在mergeHook之后给其自身加一个_merged属性
``` js
const componentVnodeHooks = {
  init() {}, // 组件初始化时候调用
  prepatch() {},
  insert() {},
  destroy() {}
}
function installComponentHooks(data) {
  let kyes = Object.keys(componentVnodeHooks)
  for (let i = 0;i<keys.length;i++>) {
    let key = keys[i] // 拿到key
    let fn = componentVnodeHooks[key]
    let existing = data[key]
    if(existing !== fn && !(existing && existing._merged)) {
      data[key] = existing ? mergeHook(data[key], fn): fn
    }
  }
}
```
### 使用mergeHook实现两个函数合并
```
  function mergeHook(fn1,fn2) {
    const merged = function(arg) {
      fn1(arg)
      fn2(arg)
    }
    merged._merged = true
    return merged
  }
```
### 组件的渲染
* 组件的渲染同样会走update-pathch-createElm流程，那么在createElm中我们碰到了组件vnode怎么和普通vnode区分那？
* 上边我们讲到了普通vnode和组件vnode的区别。我们可以判断是否有componentVnodeOptions，或者通过data中是否有hook来判断，vue中采取的是hook来进行判断
``` js
function createElm(vnode, insertedVnodeQueue, parentElm) {
  // 这里就是尝试这去看vnode是否为组件vnode。如果是那么不再往下执行了
  if (createComponent(vnode)) {
    return
  }
}
* 这里的createComponent就是判断组件是否有init hook有的话直接执行init，最后如果有组件vnode的实例那么返回ture不再走普通dom的渲染流程。
``` js
  function createComponent(vnode, insertedVnode) {
    let i = vnode.data
    if (isDef(i)) {
      if (isDef(i=i.hook) && isDef(i=i.init)) {
        i(vnode, false)
      }
      if (isDef(vnode.componentInstance)) {
      initComponent(vnode, insertedVnodeQueue)
      insert(parentElm, vnode.elm, refElm)
      return true
    }
    }
  }
```
### 这里走到了vnode中hook的init-hook，来进行执行组件的挂载流程。
``` js
//执行init hook
* 目标：将组件vnode的构造函数执行，也就是拿到vnode.componentOptions.Ctor执行，里边会执行this_init()
* 入参：组件vnode
init (vnode) {
  const child = vnode.componentInstance = createComponentInstanceForVnode(
    vnode,
    activeInstance
  )
  // 组件自己去执行挂载流程，因为Vue中没有el不会继续执行$mount
  child.$mount(undefined)
}
```
### createComponentInstanceForVnode,创建组件vnode实例并且传入父子组件关系
``` js
function createComponentInstanceForVnode(vnode, activeInstance) {
  let options = {
    isComponent: true,
    parent: activeInstance,
    parentVnode: vnode
  }
  let fn = vnode.componentOptions.Ctor
  return new fn(options)
}
```
