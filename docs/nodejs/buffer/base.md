### 基础概念了解
#### 字节、位、字符编码。
* 1个字节由8个位(bite)组成，每个位都是二进制的o或者1。
* 一个字符或者字符都是由一个字节组成的。gbk中一个汉字由两个位组成，utf-8中有三个字节组成的。
* 常用的字符编码是：gbk编码，utf-8，nodejs中只支持utf-8编码。
#### 进制的表示：
* 二进制使用0b，8进制使用0o，16进制使用0x，10进制使用0d
#### 将任意进制转换为10进制：利用parseInt(num, base)的第二个参数指定num的进制
```
// 将二进制10转化为10进制2
console.log('将二进制转化为10进制',parseInt('10', 2))
// 将8进制10转换为十进制8
console.log('将8进制转化为10进制',parseInt('10', 8))
// 将16进制10转换为十进制16
console.log('将8进制转化为10进制',parseInt('10', 16))
```
#### 将任意进制转换为任意进制：利用toString(base)指定转换后的字符的进制。
```
  // 将16进制转换为10进制
  console.log(0x16.toString())
  // 将16进制转换为2进制
  console.log(0x16.toString(2))
```
#### 针对于二进制的位运算 | & <<
1. | 或运算，只有有一个位置是1，那么这个位的结果就是1
```
let re = ob10 | ob11 // ob11
console.log(re)
// 判断一个数是奇数还是偶数(如果是奇数的话转换为二进制那么最后一位肯定是1)
function judge(num) {
  return num | 1
}
// 判断偶数
function judge(num) {
  return !(num | 1)
}
// vue3中也用来来判断节点的类型
```
2. & 且运算，只有两个位置都是1，那么这个位的结果才是1
```
  let re = ob10 | ob11 // ob10
  console.log(re)
```
3. <<,将符号左边的数字右移符号右边的数字位，得到的结果
```
  let re = 1 << 2 // 100=4
  console.log(r)
```
#### buffer的特性
* buffer是node中的最小单位
* buffer生命后长度不可改变
* buffer可以和字符串相互转换
#### 定义一个buffer的三种方法
1. 通过直接传入数字定义一个buffer，代表这个buffer的长度，默认各个位为以0为值。可用第二个参数进行改变默认值：Buffer.alloc(number, number)
```
let buf = Buffer.alloc(10, 1)
console.log(buf)
```
2. 通过传入字符串来定义，Buffer.from(string:param):Buffer.from('侯建东')
```
  let name = Buffer.from('侯建东')
  console.log(name)
```
#### buffer转换为字符串:通过toString方法
```
  let buf = Buffer.form('侯建东')
  let original = buf.toString()
  console.lopg(original)
```
#### buffer的常用api
1. 判断是否为buffer
```
let buf = Buffer.from('s')
Buffer.isBuffer(buf)
```
2. copy方法，将buffer赋值到目标buffer上(targetBuffer, stargetStart, sourceStart, sourceEnd)
```
  let bufSource = Buffer.from('小猫')
  let targetBuf = Buffer.alloc(bufSource.length)
  bufSource.copy(targetBuf, 0)
```
3. concat方法，将多个buffer合并成一个([...bufferList])
```
  let buf1 = Buffer.from('侯')
  let buf2 = Buffer.from('建')
  let buf3 = Buffer.from('东')
  let newBuf = Buffer.concat([buf1, buf2, buf3])
```
4.
