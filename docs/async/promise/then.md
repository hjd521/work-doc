### 实现promise中的then方法
### 功能总结：
* reslove调用时候执行then绑定的方法。
* 支持成功回调和失败回调的参数传入。
* 在promise的状态固定了之后就不能再改变，会立即在下一个tick执行。
* 如何支持链式调用？返回一个新的promise.
#### 实现步骤
1. 定义一个新的promise实例并且返回，实现链式调用的功能。
2. 参数标准化，对then中的两个参数进行默认值设置。
3. 判断promise的内部状态status
4. 如果为pending，那么添加回调函数到对应的成功或者失败数组中。
5. 并且利用try catch防止代码报错。
6. 利用resolvePromise来处理回调的结果，以为后边的链式调用提供resolve值
```
  then(sucBack, failBack) {
    let self = this
    let promise2 = new Promise((resolve, reject) => {
      if (!sucBack) {
        subBack  = (val) => {
          return val
        }
    }
    if (!failBack) {
      failBack = (val) => {
        return val
      }
    }
    if (this.status = status.fullfilled) {
      setTimeout(() => {
        try {
          let x = sucBack(this.value)
          resolvePromise(promise2,x resolve,reject)
        } catch((err) => {
          reject(err)
        })
      },0)
    }
    if (this.status = status.failed) {
      setTimeout(() => {
        try {
          let x = failBack(this.reason)
          resolvePromise(promise2,x resolve,reject)
        } catch((err) => {
          reject(err)
        })
      },0)
    }
    if (this.status = status.pending) {
      this.fullfills.push(function() {
        setTimeout(() => {
          sucBack(self.reason)
        }, 0)
      })
      this.fails.push(function() {
        setTimeout(() => {
         try {
          let x = sucBack(this.value)
          resolvePromise(promise2,x resolve,reject)
        } catch((err) => {
          reject(err)
        })
        }, 0)
      })
    }
    })
    return promise2
  }
```