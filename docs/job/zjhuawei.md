### 浙江华为面试题总结
#### 1面
1. ：项目中单元测试的颗粒度，如何判断单元测试代码是否符合规范？
2. ：webpack的流程？
* webpack源码的处理流程。从entry-compiler-plugin-compilation-loader处理-生成资源-产出文件
3. ：webpack处理文件是广度还是深度？
* 深度
4. ：webpack如何实现一个plugin？
```
  class WebpackPlugin {
    apply(compiler) {
      compiler.hooks.done.tap('myplugin', (data) => {

      })
    }
  }
```
5. ：浏览器的渲染原理，输入url到页面展示的流程？
6. ：如果一个页面白屏时间过长，有哪些优化方式？
7. ：浏览器的eventloop和node中的eventloop？
```
  // nodejs的eventloop是分为四个阶段的
```
8. ：v8的垃圾回收机制能说下吗？
```
  新生代内存采用标记清除
  老生代由于内纯占用太大可以采用标记清除花费时间会很长且会产生内存碎片->采用标记整理->增量标记->增量整理。
```
9. ：为什么垃圾回收不用引用计算？有哪些缺点？
```
  // 解决不了循环引用的问题。
```
10. ：算法题，求一个整数数组中相加等于100的两个数？
```
  // 构建map-{value: index}
  // 寻找100 - value作为map的key，如果有，且index不相等，那么即可。
```
11. ：nodejs中多进程监听同一个接口为什么不会报错？
```
  可以传递文件描述符给子进程，这样就不会报错了。各个子进程之间来争夺请求。主进程与子进程之间可以使用ipc通信
```
12.  vue的响应式原理是如何实现的？如何解决循环引用的问题？
* 参考vue2源码分析系列
13.  vue的dom-diff算法是如何实现的？为什么要首位对比？
* 参考vue2源码分析系列
14.  vue当中key的作用是什么？如果不写key会有什么结果？
* 造成dom做了不必要的更新操作。
#### 2，3，4，5面
* 后续面试技术问题基本没有了。都是再聊一些项目问题。
1. 手写一个快排算法，并说出复杂度。