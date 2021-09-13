### 实现promise.all
* 实现数组中所有的promise实例都resolve之后，才resolve，否则走reject。
* 实现将promise数组中的顺序组织返回结果。
### 实现步骤
1. 创建一个新的promise实例，并且返回。为then提供
2. 循环promise数组，为每一个数组绑定then方法，promise成功时候拿到resolve出来的值调用结果收集函数，其他的走reject
3. 如果数组中不为promise实例，那么用这个值调用结果收集函数
4. 结果收集函数组织promise实例返回的结果，当数量等于传入的数组数量时候走resolve
```
Promise.all = function(arr) {
  // 收集promise的结果成为数组
  let result = []
  let times = 0
  function collectResult(y, i) {
    result[i] = y;
    if (++times === result.length) {
      resolve(result)
    }
  }
  return new Promise((resolve, reject) => {
    let (i=0;i<arr.length;i++) {
      let cur = arr[i]
      if (isPromise(cur)) {
        cur.then((y) => {
          collectResult(y, i)
        }, reject)
      } else {
        collectResult(cur, i)
      }
    }
  })
}
```