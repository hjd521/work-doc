### async的基本概念
* async函数返回一个promise对象，可以用then接收。当函数运行中，一旦遇到await就会先返回，等到异步操作完成，再接着往下继续执行。
* async函数内部return命令返回的值，会被then方法回调函数接收到。
* async函数内部的错误会被catch方法接收到。
### await命令基本概念
* await后边跟着一个promise对象，返回该对象的结果。如果不是promise对象直接返回对应的值。
* await后边的promise如果变为reject状态，则reject的参数会给async函数的catch接收，且没做try catch情况下会直接退出async函数。
```
  // 实现休眠效果,让语句5s后才执行。
  function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }
  async run() {
    await sleep(5000)
    console.log(666)
  }
  sleep()
```