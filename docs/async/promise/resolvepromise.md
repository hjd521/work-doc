### 实现resolvePromise方法，处理then中回调返回的值。
1. 如果是普通值那么直接resolve出去
2. 如果是新的promose实例或者有then属性，那么转换为promise。调用then方法call(x)并且绑定回调，在回调中继续递归调用resolvePromise。
```
  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      throw new Error('duplite promise!')
    }
    if ((typeof(x) === 'object' && x !== null) || typeof x = 'function') {
      let then = x.then
      if (then) {
        then.call(x, function(y) {
          resolvePromise(promise2, y, resolve, reject)
        })
      }
    } else {
      resolve(x)
    }
  }
```
