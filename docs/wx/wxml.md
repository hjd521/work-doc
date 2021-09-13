### wxml构建页面
  * 数据绑定标志{{}}
  * 列表渲染 wx:for="{{array}}" wx:for-index='index' wx:for-item='item'
  * 条件渲染 wx:if="{{showIF}}" wx:elif wx:else
  * 包装元素 <block></block>
 ### wxml元素的事件
  * 事件冒泡：bindTap，用bind加上事件名，这个时候事件会冒泡传递
  * 阻止事件冒泡：catchTap，用capture加上事件名，事件会走捕获流程。
  * 事件捕获：capture-bind:tab
  * 事件绑定这本身触发不做传播：capture-catch:tab。这个时候将不会触发传播
  * 事件处理函数得到的参数{type,timeStamp, targe: {id, dataset}, currentTarget}
