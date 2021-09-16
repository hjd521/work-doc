### 微前端
#### 微前端的核心价值 <https://zhuanlan.zhihu.com/p/95085796>
1. 技术栈无关，新老技术栈可以很好的兼容，比如有一个老的项目采用的是jquery，然后新的功能你想采用vue/react来开发。这样微服务可以确保老的代码能够平缓的迁移，以及随时可以用上新的热门技术栈。
2. 巨型项目解耦，巨型项目随着人员更迭，产品升级等等会带来很多工程上的问题，比如智慧停车系统总共有11个子项目，这些项目如果放到一个项目中，那么势必会造成维护困难的为。那么通过微服务来进行重组，让这些子项目可以自由的组合，既提高了灵活性，也提高了维护性。
3. 项目可以独立开发，独立部署，减少维护成本。
4. 每个应用之间状态隔离，保证沙箱(js沙箱，css样式隔离)，但是也可以进行通信。
#### 为什么不用iframe <https://www.yuque.com/kuitos/gky7yw/gesexv>
1. 慢：iframe每次刷新都需要重新建立上下文，速度较慢
2. ui问题：ui不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中。
3. 数据通信问题：全局上下文完全隔离，内存变量不共享。通信困难
#### 框架选择
* qiankun <https://qiankun.umijs.org/zh/guide>
### 流程梳理
####
* 注册微应用信息:指定请求url(entry)，请求来的js挂载的dom(container)，指定请求的触发条件(activeRule)
* 子应用导出自己的信息: 通过library配置来导出自己。供主应用加载。
* 通信采用监听数据变化的模式。initGlobalState
### 主应用配置
* 注册子应用:使用registerMicroApps来进行注册。
* name:应用的名称，
* entry：fetch请求的应用的地址, 在你加载子应用浏览器会发起一个fetch请求。
* container：子应用挂载的dom选择器。
* activeRule：会和url中的字符串中的路径部分做前缀匹配，成功的话表明该应用会被激活，也可以是个函数返回boolean。
* 注册微应用的基础配置信息。当浏览器 url 发生变化时，会自动检查每一个微应用注册的 activeRule 规则，符合规则的应用将会被自动激活
``` js
import { registerMicroApps, start } from 'qiankun'
registerMicroApps([
  {
    name: 'vue app',
    entry: '//localhost:8080',
    container: '#yourcontainer',
    activeRule: '/yourContainer',
  }
])
```
* 关于hash路由的规则。
``` js
'/pathname/#/hash';
 https://app.com/pathname/#/hash/route/nested
```
### 子应用配置相关
* 在main.js中导出钩子配置，供乾坤在响应加载卸载时候调用
``` js
// 加载安装
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
// 渲染
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev, '微应用中接收的通信');
  });
  render(props);
}
// 卸载
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
// props为主应用传递过来的数据，可以用来通信，或者一些接收一些配置信息。
render(props) {
  const { container } = props;
  instance = new Vue({
    router: route,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#container') : '#container');
}
```
* 子应用配置相关
``` js
// 配置子应用的publicPath防止资源加载出现错误
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```
``` js
// 配置webpack导出来保证主应用可以顺利加载到
output: {
    library: name,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`, 
}
```
#### 主应用和子应用如何通信
* 主应用通过initGlobalState()来初始化一个状态，并且进行监听或者修改
``` js
import { initGlobalState } from 'qiankun';
const actions = initGlobalState(state);
// 监听状态变化
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev)
})
// 修改全局状态
actions.setGlobalState(state)
// 取消监听
actions.offGlobalStateChange()
```
* 子应用通过mount钩子中的props进行监听
``` js
  export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev);
  });
  props.setGlobalState(state);
}
```
