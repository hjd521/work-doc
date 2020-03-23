## sass是一款强化css的辅助工具，
element-ui中就用到了这个，我们依赖于element进行二次开发，因此总结了下sass的常用知识点
### sass的特色
* 1:支持嵌套来写css，看起来更直观。
* 2:支持变量，函数，可以很方便的进行统一的修改，易于程序维护。
* 3:支持mixins(混入)可以支持代码段的复用，element利用这点生成动态的模块顶部id。以防止冲突。
### 变量
* 以${name}作为变量 例如$themeColor: gray;
### mixin
* 定义mixin
@mixin large-text {
  color: red;
}
@mixin set-color(size) {
  font-size: #{size}
}
* 引用mixin
.test {
  @include large-text
}
.test1 {
  @include set-color('24px')
}
* 向混合样式中导入内容
@mixin b()