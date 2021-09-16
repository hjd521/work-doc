### vue的生命周期实现
* vue实现了组件化，在组件的渲染更新过程中会运行一些生命周期的钩子函数，来提供给用户在一定场景下添加自己代码的特性。比如created，mounted等等
* 如何执行我们定义在配置上的钩子函数?
``` js
export function callHook (vm, hook) {
  pushTarget()
  // 拿到我们定义总得具体的钩子，vm为钩子定义所在的vnode的实例。
  const handlers = vm.$options[hook]
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm)
      } catch (e) {
        handleError(e, vm, `${hook} hook`)
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```
* 那么这里的pushTarget和popTarget是干嘛的呐？为什么要有啊？为什么要设置Dep.target为null？
* 因为这里已经不是模板语法了，这里对于vue响应式数据的访问不应该引起vue的重新渲染了。
``` js
let targetStack = []
Dep.target = null
function pushTarget(target) {
  targetStack.push(target)
  Dep.target = target
}
function popTarget() {
  Dep.target = targetStack.pop()
}
```
### beforeCreate & created钩子
* beforeCreate钩子执行时候vue的initData还没有执行，无法拿到vue实例中的data，methods，props等数据。
* created是在初始化data，methods，props之后，因此可以拿到这些数据，但是dom还没有渲染，因此拿不到dom元素。
``` js
  Vue.prototype._init = function (options) {
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm) // resolve injections before data/props
  initState(vm)
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')
}
```
### beforeMount & mounted
* beforeMount在dom渲染之前调用，调用时机是mountComponent的开始。
* mounted是在dom渲染之后调用的，且调用顺序是先子后父。那么我们是怎么处理这个顺序的呐？且普通vnode和组件vnode的钩子是怎么进行添加到队列中的呐？
#### 对于普通vnode来说在patch函数中执行完毕createElm创建完真实dom之后，需要进行处理
* 这里当为根节点的vnode时候，需要执行队列中保存的实例的mounted钩子
* 当他有parent节点时候，他应该把自身存储的mounted钩子队列给父亲放入且不会影响组件节点插入钩子。因此需要挂载到父亲组件节点的data上的pendingInsert属性上，由父节点统一处理。
``` js
function patch(oldVnode, vnode) {
  var isInitialPatch = false;
  var insertedVnodeQueue = [];
  ...  
  createElm()
  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
}
// 判断当前普通vnode是否为初次挂载且有父亲vnode，有的话做pending处理，否则执行insert钩子
function invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch) {
  if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
  } else {
    for (let i =0;i<insertedVnodeQueue.length;i++) {
      insertedVnodeQueue[i].data.insert(insertedVnodeQueue[i])
    }
  }
}
// 拿到组件vnode的定义找到实例，然后执行callHook()
const componentVnodeHooks = {
  insert(vnode) {
    let instance = vnode.instance
    if (!instance._mounted) {
      instance._mounted = true
      callHook(instance, 'mounted') // 执行mounted钩子
    }
  }
}
```
#### 根Vue实例的特殊处理。
* 根vue实例不会放入insertedVnodeQueue中，因此需要在mountedComponent的最后执行根vue的mounted钩子。
``` js
function mountedComponent() {
  ...
  if (vm.$vnode === null) {
    vm._isMounted = true
    callHolk(vm, 'mounted')
  }
  return vm
}

```
### 组件vnode的处理
* 组件的子vnode可能会有insertedQueue数组挂载在vnode.data.pendingInsert上，需要特殊处理。
* 时机：在createComponent函数中，在组件处理完之后，执行initComponent
``` js
function createComponent(vnode, insertedVnodeQueue, parentElm) {
  ...
  // 判断组件是否有实例
  if (vnode.componentInstance) {
    initComponent(vnode, insertedVnodeQueue);
    insert(parentElm, vnode.elm);
  }
}
// 处理组件的
function initComponent(vnode, insertedVnodeQueue) {
  if  (vnode.data.pendingInserted) {
    insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInserted)
    vnode.data.pendingInsert = null;
  }
  vnode.elm = vnode.componentInstance.$el;
  if (isDef(vnode.data.hook.insert)) {
    insertedVnodeQueue.push(vnode)
  }
}
```


