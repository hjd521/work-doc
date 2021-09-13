### js中new操作符做了哪些事情？
1. 创建一个空对象{}。
2. 将创建的这个新对象的__proto__指向构造函数的原型。
3. 将步骤1创建的对象作为上下文执行构造函数。
4. 如果构造函数没有返回一个引用类型的对象则将this返回，否则返回构造函数返回的对象
* 手动实现一个new方法。
``` js
function myNew(fn) {
  let obj = {}
  obj.__proto__ = fn.prototype
  let result = fn.call(obj)
  if (typeof result === 'object') {
    return result
  } else {
    return obj
  }
}
```