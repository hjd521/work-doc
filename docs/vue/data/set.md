### set触发依赖的更新
* 目标：当data中数据变化，通过代理Dep通知收集的依赖Watcher进行重新渲染。
* 涉及对象：data的set监听，Dep代理器，Watcher：订阅者。
* 环境：在data中的数据变化时候，且同一tick的修改只触发一次dom更新。
* 注意事项：set时候赋值，这个值也要被响应式处理。
``` js
  // 为data添加get&set监听
  function defineReactive(data,key,val) {
    ...
    set: function(value) {
      if (val === value) {
        return  value
      }
      childObj = observe(value) // 对新赋的值进行响应式处理
      dep.notify() // 通知代理器触发依赖更新
    }
  }
```
``` js
// 调用收集的订阅者的update方法进行更新
Dep.prototype.notify = function() {
  this.subs.forEach((sub) => {
    sub.update()
  })
}
```
``` js
// 更新依赖,这里的不同类型的watcher处理，我们暂时忽略，只看queueWatcher(this)
Watcher.prototype.update() {
  if (this.computed) {
      if (this.dep.subs.length === 0) {
        this.dirty = true
      } else {
        this.getAndInvoke(() => {
          this.dep.notify()
        })
      }
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
}
```
#### queueWatcher(job)
* 操作对象：watcher实例。
* 目的：让多个watcher在同一个tick中执行。
* 环境：data改变触发订阅的所有watcher更新。
* tip: 以下的nextTick我们之后再说，暂时可以当他为setTimeout
```
  let waiting = false // 控制tick只执行一次
  let queue = [] // 存储job数组
  let has = {} // 防止job重复。
  let flusing  = false // 是否已经在下一个tick中执行任务了，如果为true则表明，是在执行任务中，又生成了新任务
  function queueWatcher(job) {
    if(!has[id]) {
      if(!flusing) {
        has[id] = true
        queue.push(job)
      } else {
        let index = queue.findIndex((item) = > {
          return item.id> job.id
        })
        if (index === -1) {
          queue.push(job)
        } else {
          queue.splice(index-1, 0, job)
        }
      }
    }
    if (!watiting) {
      waiting = true
      nextTick(scheldar)
    }
  }
```
#### scheldar：执行watcher的run方法。
* 操作对象：watcher数组queue。
* 目标：执行watcher的run方法，并且调用update钩子。
* tip：updated钩子是从父到子执行的。且其他钩子是在渲染钩子之前执行的。
* tip：由于父组件可能销毁子组件的渲染，所以要从父亲到儿子。
``` js
  function scheldar() {
    queue.sort((a,b) => {
      return a.id<b.id
    })
    // 执行watcher的run方法，触发重新渲染
    for (let i = 0;i<queue.length;queue++) {
      let watcher = queue[i]
      // 触发beforeUpdate钩子
      if (watcher.before) {
        watcher.before()
      }
      let id = watcher.id
      has[id] = null
      watcher.run()
    }
    const updatedQueue = queue.slice() // 拿到需要执行updated钩子的watcher
    resetSchedulerState() // 重置状态
    callUpdatedHooks(updatedQueue) // 执行updated钩子
  }
```
``` js
function  resetSchedulerState() {
  waiting = false
  has = {}
  queue.length = 0
  flusing = false
}
```
``` js
// 调用updated钩子
function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
```

