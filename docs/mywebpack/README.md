# webpack总结
* entry: 入口，webpack执行构建的第一步将从entry开始递归构建，可以理解为输入。

* output： 出口，webpack构建的bundles输出的地方。

## entry
string|array|object|function
* string：应用程序的起点入口，
* array: 数组的每一项都会执行切只会生成一个chunk，当结合output.library选项时，则只导出最后一项。
* object：适用于多页面应用，会有多个起点，则每个键(key)会是 chunk 的名称，该值描述了 chunk 的入口起点。
* function：入口不是静态值时候，我们可以指定一个函数通过返回来指定入口

<<< @/docs/.vuepress/public/js/webpack/entry.js

## 命名
entry中字符串，数组都是对象的简写形式。entry，数组时候默认生成的chunk为main。当为对象时候每个key为chunk的名称

## 出口output
output属性决定webpack在哪里输出他的bundles，以及如何命名这些文件。
* filename: '输出bundle的名称'可以通过模版语法指定chunk或者name。
* path：bundle的输出路径可以利用path.resolve()或者相对绝对路径来指定。
* publicPath: 指定资源的访问路径，可以通过其设置cdn。

<<< @/docs/.vuepress/public/js/webpack/public.js

## output相关的常用插件
* 1，根据特定的html模版自动生成html文件并且引用生成的chunk：html-webpack-plugin
* 2, 清理dist文件夹插件：clean-webpack-plugin
* 3，分离css文件mini-css-extract-plugin。

## hash，chunkhash，contenthash的区别
* hash：针对整个项目的，所有文件的hash值保持一致，只要改变了内容那么所有文件的缓存都会失效。没有起到灵活缓存的作用
* chunkhash：针对单个chunk，我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成hash值，那么只要我们不改动公共库的代码，就可以保证其hash值不会受影响。由于采用chunkhash，所以项目主入口文件main.js及其对应的依赖文件main.css由于被打包在同一个模块，所以共用相同的chunkhash。这样就会有个问题，只要对应css或则js改变，与其关联的文件hash值也会改变，但其内容并没有改变，所以没有达到缓存意义。
* contenthash: 针对css来定，可以用上边讲到的mini-css-extract-plugin将css设置为contenthash，解决上述问题。
首先我们看下设置hash的效果
* 当为hash时候

<<< @/docs/.vuepress/public/js/webpack/chunk.js
* 当为chunkhash时候

<<< @/docs/.vuepress/public/js/webpack/chunkhash.js
* 当为contenthash时候

<<< @/docs/.vuepress/public/js/webpack/contenthash.js

## tree-shaking
* 目的： tree-shaking的目的是移除es6中没有用到的export代码。可以用来优化我们的打包后的代码体积
* 实现步骤
1. 在package.json中增加sideEffects:[],增加不能使用tree-shaking的代码文件路径，这些文件将不会被tree-shaking处理，如果所有的代码都可以被tree-shaking处理，那么设置sideEffects: false即可
2. 在wepback4以前我们可以使用UglifyJsPlugin压缩插件来去掉冗余的代码，webpack4中只要我们设置mode：production，webpack会帮我们自动处理

## 生产环境构建
* 开发环境和生产的构建目标差异很大，开发环境需要对我们开发提供更加便捷的服务，比如source-map，hot module，生产环境我们需要优化资源，改善加载时间，提升页面展现效率。
* 指定环境我们可以通过
1. package.json中NODE_ENV=production || --mode production
2. webpack.config.js中指定mode："production" || "development"
3. 使用webpack.DefinePlugin
 new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production')
 })

 ## 代码分离
 * 代码分离是为了使生成的bundle体积更小，以达到控制资源加载，影响加载时间。
 1. 通过entry来配置手动分离（这个方法不灵活，不能动态进行代码拆分且会造成多个bundle包含重复代码）
 2. 通过new webpack.optimize.CommonsChunkPlugin({name: 'common'}) <-4以下版本->。4以上版本通过splitChunks配置项来设置。


