### promise的基础实现
* promise是一个class，接收一个函数作为参数，并且参数函数可以调用resolve，reject方法来执行对应的成功回调以及失败回调。
### 实现步骤：
1. 定义class Promise
2. 初始化promise内部状态status，初始化成功回调fullfills，初始化失败回调fails，
3. 初始化成功时候的值value，失败的值reason，
4. 定义resolve，判断status的状态为pending才继续执行，赋值value，更改状态，执行成功回调
5. 定义reject，同上pending才执行，赋值reason,更改状态，执行失败回调
5. 执行传入的函数fn，并且传入resolve，reject
### 对应的问题
* promise中的状态一旦确定了就不能改变了是如何实现的？
```
let status = {
  pending: 'PENDING',
  fullfilled: 'FULLFILLED'，
  failed: 'FAILED'
}
class Promise() {
  constructor(fn) {
    this.status = status.pending
    this.reason = ''
    this.value = ''
    this.fullfills = []
    this.fails = []
    const resolve = (value) => {
      if (this.status === status.pending) {
        this.value = value
        this.status = status.fullfilled
        this.fullfills.forEach((fn) => {
          fn(value)
        })
      }
    }
    const reject = (value) => {
      if (this.status === status.pending) {
        this.reason = value
        this.status = status.failed
        this.fails.forEach((fn) => {
          fn(value)
        })
      }
    }
    try {
      fn(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }
}
```