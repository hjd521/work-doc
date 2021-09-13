### vue从new Vue到显示到页面上dom的流程。
* 参考链接： <https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/new-vue.html#>
1. new Vue中传入el以及render函数(暂时不考虑template)。
2. 执行this._init()流程(处理options, 挂载el)。
``` js
  Vue.prototype._init = function(options) {
    const vm = this
    vm.$options = options
    vm.$mount(vm.$options.el)
  }
```
3. 调用$mount执行mountComponent将render生成的dom挂载到el上边
``` js
  Vue.prototype.$mount = function(el) {
    el = document.querSelector(el)
    return mountComponent(this, el)
  }
```
4. mountComponent中定义渲染流程函数updateComponent，这里的watcher先忽略掉，可以理解为直接执行这个函数。后边我们会介绍
``` js
  function mountComponent(vm, el) {
    // dom渲染流程函数
    const updateComponent = vm.update(vm.render())
    new Watcher(vm, updateComponent,noop, {
      before() {
        if (vm._isMounted) {
          callHook(vm, 'beforeUpdate')
        }
      }
    })
  }
``` 
5. render生成vdom, 从options中拿到render函数,执行并且返回。 这里还会构造父子组件的关系之后我们说
``` js
  Vue.prototype.render = function() {
    const vm = this
    const {render} = this.$opions
    let vnode = render.call(vm, vm.$createElement)
    return vnode
  } 
```
6. $createElement调用createElement
``` js
export function initRender (vm: Component) {
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}
```
7. 在介绍createElement之前我们先介绍下vnode。
* 虚拟vnode的结构，虚拟vnode解决了什么问题。
* vnode的出现是为了解决两个问题，1：创建node节点的代码很昂贵，2.用来做diff。核心是用js来描述一个node节点。
``` js
class Vnode {
  constructor(tag, data, children, text, context) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.key = data.key
    this.context = context
  }
}
```
8. createElement处理参数并且调用_createElement创建vnode。
``` js
  function createElement(context, tag, data, children) {
    if (Array.isArray(data) || typeOf data === 'string') {
      children = data
      data = undefined
    }
    return _createElement(context, tag, data, children)
  }
```
9. 使用_createElement调用new Vnode创建vnode
``` js
  // 当满足tag为字符串且为保留标签时候通过new Vnode创建否则则认为是一个组件vnode，这个之后我们说
  let vnode = null
  if (typeof tag === 'string') {
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag)
    } 
  } else {
    vnode = createComponent(tag, data, context, children)
  }
```
10. 执行_update
* _update的调用的调用时机有两个，一是渲染的时候，而是更新的时候，最终都要调用patch方法来进行dom操作
* 如何区分首次渲染还是更新的？通过vm._vnode,vm._vnode存在那么就是更新，否则就是渲染
* 如何保证上下文的不会混乱？通过在每个update中保存父级上下文，在dom渲染到页面之后切换全局上下文的实例为父级的上下文
``` js
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
  const vm: Component = this
  const prevEl = vm.$el
  const prevVnode = vm._vnode
  const prevActiveInstance = activeInstance // 保存父亲的实例
  activeInstance = vm // 切换当前的上下文实例
  vm._vnode = vnode
  if (!prevVnode) {
    // 渲染流程
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
  } else {
    // 更新流程
    vm.$el = vm.__patch__(prevVnode, vnode)
  }
  activeInstance = prevActiveInstance // 回复父级的上下文。
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el
  }
}
```
11. __patch__在浏览器环境中会执行patch函数。通过globa是否等于window来进行判断。
* patch函数拿到的对象是什么？要做什么 oldVnode和vnode，需要用vnode替换到oldVnode
* 1. 如果没有vnode，那么代表这个vnode即将销毁，需要走销毁逻辑
* 2. oldVnode为null，那么代表是组件的初次挂载
* 3. oldVnode有，且preVnode和vnode为sanmeVnode，那么需要走pathVnode进行diff比对
* 4. 剩下的都可以当做需要替换，原则是找到找到oldVnode的elm的父亲，调用createElm将vnode进行挂载
* 最后需要移除preVnode的elm。
``` js
Vue.prototype.__patch__ = inBrowser ? patch : noop
export const patch: Function = createPatchFunction({ nodeOps, modules })
export function createPatchFunction() {
  return function patch() {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) invokeDestroyHook(oldVnode)
      return
    }

    let isInitialPatch = false
    const insertedVnodeQueue = []

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue)
    } else {
      const isRealElement = isDef(oldVnode.nodeType)
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR)
            hydrating = true
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true)
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              )
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode)
        }

        // replacing existing element
        const oldElm = oldVnode.elm
        const parentElm = nodeOps.parentNode(oldElm)
        // 创建新的vnode
        createElm(
          vnode,
          insertedVnodeQueue,
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        )
    }
  }
}
```
12. 通过createElm来创建一个新的dom节点
* 参数说明：createElm接收的参数为新的vnode，parentElm这两个参数为最重要的，insertedVnodeQueue与生命周期相关，暂时可以忽略掉。
* 作用：createElm做的事情就是将vnode转换为一个真实的dom节点。
* 步骤
* 1. 通过tag创建一个真实的节点。
* 2. 遍历children以上一步创建的真实节点作为父亲节点继续调用createElem。创建子节点。
* 3. 插入步骤1中创建的真实节点到parentElm，使用insertBefore
``` js
  function createElm(vnode, parentElm) {
    let tag = vnode.tag
    let children  = vnode.children
    if (tag) {
      vnode.elm = document.createElement(tag)
      createChildren(vnode, children)
      insert(parentElm, vnode.elm, refElm)
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text)
      insert(parentElm, vnode.elm, refElm)
    }
  }
  // 处理子节点。
  function createChildren (vnode, children, insertedVnodeQueue) {
  if (Array.isArray(children)) {
    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(children)
    }
    for (let i = 0; i < children.length; ++i) {
      createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
    }
  } else if (isPrimitive(vnode.text)) {
    nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
  }
}
// 通过源生dom的操作方法插入dom
function insert (parent, elm, ref) {
  if (isDef(parent)) {
    if (isDef(ref)) {
      if (ref.parentNode === parent) {
        nodeOps.insertBefore(parent, elm, ref)
      }
    } else {
      nodeOps.appendChild(parent, elm)
    }
  }
}
```
