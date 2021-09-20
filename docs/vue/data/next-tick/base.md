### vue中的next-tick
* 操作对象(入参)：函数
* 实现目标（what）：将函数在下一个tick统一执行掉。
* 为什么要做(why): 每个data都会触发watcher更新进而导致dom渲染，保证多个dom渲染在一次执行完成，防止页面多次重排。
* 支持哪些形式调用
``` js
  this.$nextTick(() => {})
  this.$nextTick().then()
```
* 怎么实现
1. 首先将传入的数组函数都整合到一个数组中。
2. 判断是否传入函数fn，如果传入了那么就是一个普通的异步，否则就是promise，需要返回一个promise供外部调用。
``` js
  let callbacks = []
  function nextTick(fn) {
    let _resolve = null
    this.callbacks.push(function() {
      if (!fn) {
        try{
          cb()
        } catch(err) {
          console.log(err)
        }
      } else {
        _resolve()
      }
    })
    //3.-----步骤三
    if (!fn && typeof Promise !== 'undefined')  {
      return new Promise((resolve) => {
        _resolve = resolve
      })
    }
  }
```
3: 添加控制变量，保证只异步执行一次数组中函数的调用
``` js
let pending = false
if (!pending) {
  pending = true
  microTimerFunc() // 步骤四
}
```
4. 异步执行callabcks中的函数
``` js
function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  microTimerFunc = () => {
    p.then(flushCallbacks)
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) setTimeout(noop)
  }
}
macroTimerFunc = () => {
  setTimeout(flushCallbacks, 0)
}
```