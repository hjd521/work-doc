### get收集依赖
#### 对象：who
* watcher被收集的对象。
* Dep:收集watcher依赖的类。
#### 场景和时机：where
* 执行mountComponent时候，会调用渲染watcher执行vm._update(vm._render())的时候会执行pushTarget给Dep的target赋值为当前watcher。那么在这个过程中访问到我们定义的data中的属性的时候就会触发get。那么这个时候我们将这个watcher的依赖收集到当前dep中。
``` js
// 把之前的target入栈，方便以后出栈，并且赋值 Dep.target为当前watcher实例。来给dep监听
export function pushTarget (_target: Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}
```
#### 为什么要收集依赖：why
* 因为我们要在访问data的时候收集订阅者，然后再data改变的时候实现发布执行订阅者，最后触发页面更新。也就是响应式的目标所在
#### 怎么去实现：how
* 访问时候执行this.dep.depend()
``` js
let uid = 0
class Dep() {
  constructor() {
    this.id = uid++
    this.subs = [] // 存储订阅者watcher
  }
  // 判断Dep.target有的话那么执行addSub
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  addSub(sub) {
    this.subs.push(sub)
  }
}
class Watcher {
  constructor() {
    // dep表示上次渲染时候存储的dep实例
    // newDep表示这次更新时候存储的dep实例。
    this.deps = []
    this.depIds = new Set()
    this.newDeps = []
    this.newDepIds = []
  }
  // 将dep放入watcher对应的数组中。 
  addDep(dep) {
    let id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDeps.push(dep)
      this.newDepsId.add(id)
      // 可能在render中两次访问了同一个data中的key。
      // 这个时候就不要再添加了。
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }
}
```
### 监听移除
* 场景，我们模板中使用了v-if来切换模板。这个时候老的模板的数据变化不应该可以通知watcher做更新依赖。
``` js
Watcher.prototype.get = function() {
  pushTarget(this)
  let value
  const vm = this.vm
  value = this.getter.call(vm, vm)
  popTarget()
  this.cleanupDeps()
  return value
}
```
* cleanupDeps用来清除老的依赖。
* 涉及对象：newDeps， deps。
* 目标：遍历deps，如果老的依赖数组中的项不在新的依赖数组中，证明这个dep应该被清除了
``` js
Watcher.prototype.cleanupDeps() {
  this.deps.forEach((dep) => {
    if (!newDepIds.has(dep.id)) {
      dep.removeSub(this)
    }
  })
  let tmp = this.deps
  this.deps = this.newDeps
  this.newDeps = tmp
  this.newDeps.length = 0
  tmp = this.depsId
  this.depsId = this.newDepsId
  this.newDepsId = tmp
  this.newDepsId.clear()
}
```
