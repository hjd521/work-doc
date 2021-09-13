## 小程序的项目配置以及页面配置
* 小程序的代码构成包括四种格式，json：进行页面或者项目的配置，wxml：用来写页面，wxss：用来写样式，js：用来设置逻辑交互。
* 小程序根目录下的app.json文件是对项目的整体配置包括以下几项比较重要的。
1. pages: ['/pages/index/index', 'pages/log/index'] 设置小程序的页面路由。
2. networkTimeout: 10000 设置http请求超时。
3. 其他的一些包括顶部样式，tab切换等等我们参考文档就好了。
* 页面配置和程序配置基本类似，不同的是针对当前页面的一些定制化。比如导航背景颜色等等。
## 小程序项目生成以及小程序的生命周期
* 注册小程序，通过根目录的app.js调用App()方法即可当中可以传入一些生命周期的方法，或者自己定义的方法，以及对象。这里的所有对象在页面中都可以通过getApp()方法来获取到。
## 生命周期方法以及调用时机
* onLaunch：小程序初始化完成时调用，参数中会带着options，用以获取从哪里进入到当前小程序，比如扫一扫等等。注意，这个方法只会调用一次，在小程序进入后台又返回之后再onShow生命周期中进行监听。
* onShow: 小程序启动或者从后台切换回来会触发。
* onHide: 小程序进入后台时候触发。
* onError: 小程序发生错误时候。

## 页面
* 小程序页面通过Page构造函数来生成一个页面，接收一个对象作为参数，其中data属性是作为数据绑定的初始数据。以及一些页面生命周期和用户操作时候的生命周期函数。
## data以及setData来做数据绑定。
* data是数据绑定的初始数据，注意这里的value不要设置为undefined，我们要实现数据更新页面，可以使用this.setData方法。其中第一个参数为object，第二个参数是回调参数。
## 生命周期。
* onLoad：页面初始加载时候触发，在页面没有销毁时候只会触发一次。其中参数为跳转此次页面所带的参数，以？传参的形式传递。
* onShow：页面初始化时候触发，或者页面进入后台之后又返回时候触发。
* onReady: 页面初始化时候触发，当页面没有被销毁时候只会触发一次。
* onHide： 页面隐藏进入后台时候触发，此时页面没有被销毁。
* onUnload：页面卸载时候触发。
* onPullDownRefresh: 监听用户的下拉动作
* onReachBottom: 监听用户的上拉触底动作函数
* onShareAppMessage: 监听用户的右上角触发动作
* onPageScroll: 监听页面滚动事件的触发。
## 页面的路由跳转
* 小程序页面是以栈的形式维护了所有的页面。其中表现如下
1. 初始化，新页面入栈。
2. 打开新页面（通过wx.navigateTo）新页面入栈，之前的页面onHide，新页面onLoad，onShow。
3. 页面重定向（通过wx.redirectTo）新页面入栈，之前的页面onUnload,新页面onLoad，onShow。
4. 页面返回（通过wx.navigateBack）新页面入栈，之前的页面onUnload，新页面onLoad，onShow。
5. 重启动（通过wx.reLaunch）新页面入栈，之前页面onUnload，且栈被清空。
```
navigateTo, redirectTo 只能打开非 tabBar 页面。
switchTab 只能打开 tabBar 页面
reLaunch 可以打开任意页面
```