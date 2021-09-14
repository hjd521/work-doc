### js中的基础类型
* string
* number
* boolean
* null
* undefined
* symbol
* bigint
### js中的引用类型
* object
* array
* function
* Date
* RegExp
* Match
### 如何检测数据类型
* 对于基本类型来说，用户typeof可以正确显示除了null的基本数据类型,对于引用类型使用typeof除了function都显示object
``` js
  typeof 1 // 'number'
  typeof '1' // 'string'
  typeof undefined // 'undefined'
  typeof true // 'boolean'
  typeof Symbol() // 'symbol'
  // 引用类型
  typeof [] // 'object'
  typeof {} // 'object'
  typeof console.log // 'function'
  typeof /g/ // 'object'
```
* typeof的缺点是不能判断引用类型以区分null
#### 使用instanceof判断引用类型，instance是根据prototype的原型一直网上找如果有相同那么则返回true。
```
[] instanceof Array // true
[] instanceof Function // false
[] instanceof Object // true
```
#### 手写一个instanceof
``` js
  function instanceof(instance, constro) {
    if (typeof instance !== 'object' || instance === null) {
      return false
    }
    let proto = Object.getPropertyOf(instance)
    while (true) {
      if (proto === null) {
        return
      }
      if (proto === constro.prototype) {
        return true
      }
      proto = Object.getPropertyOf(proto)
    }
  }
```
#### 精确的判断数据的类型使用Object.prototype.toString
* 使用Object.prototype.toString.call(1) = '[object Number]'
``` js
  function isType(con) {
    let toS = Object.prototype.toString
    return function(param) {
      return toS.call(param) === `[object ${con}]`
    }
  }
  let isNumber = isType('Number')
  let isString = isType('String')
  let isNull = isType('Null')
  let isUndefined = isType('Unfined')
```
