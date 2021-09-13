### 实现promise.race方法
#### 实现目标
* 接收一个promise数组，数组中第一个改变状态的实例的值，作为race的值
#### 实现步骤
1. promise.race需要返回一个新的promise实例。
2. 遍历promise数组，绑定then方法，在成功是调用promise.race的resolve出去，并且阻断循环。
3. then方法的第二个参数调用collect收集错误信息当所有数组都reject之后调用race的reject。
```
Promise.race = function(arr) {
  return new Promise((resolve, reject) => {
    for (let i =0;i<arr.length;i++) {
      let cur = arr[i]
      if (isPromise(cur)) {
        cur.then((x) => {
          resolve(x)
          breack;
        }, (err) => {
          reject(x)
          break;
        })
      } else {
        resolve(cur);
        breack;
      }
    }
  })
}
```