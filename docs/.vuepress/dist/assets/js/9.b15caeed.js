(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{210:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack总结"}},[t._v("#")]),t._v(" webpack总结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("entry: 入口，webpack执行构建的第一步将从entry开始递归构建，可以理解为输入。")])]),t._v(" "),a("li",[a("p",[t._v("output： 出口，webpack构建的bundles输出的地方。")])])]),t._v(" "),a("h2",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[t._v("#")]),t._v(" entry")]),t._v(" "),a("p",[t._v("string|array|object|function")]),t._v(" "),a("ul",[a("li",[t._v("string：应用程序的起点入口，")]),t._v(" "),a("li",[t._v("array: 数组的每一项都会执行切只会生成一个chunk，当结合output.library选项时，则只导出最后一项。")]),t._v(" "),a("li",[t._v("object：适用于多页面应用，会有多个起点，则每个键(key)会是 chunk 的名称，该值描述了 chunk 的入口起点。")]),t._v(" "),a("li",[t._v("function：入口不是静态值时候，我们可以指定一个函数通过返回来指定入口")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../app.js'")]),t._v("\n\nentry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nentry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../web.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])]),a("h2",{attrs:{id:"命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[t._v("#")]),t._v(" 命名")]),t._v(" "),a("p",[t._v("entry中字符串，数组都是对象的简写形式。entry，数组时候默认生成的chunk为main。当为对象时候每个key为chunk的名称")]),t._v(" "),a("h2",{attrs:{id:"出口output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出口output"}},[t._v("#")]),t._v(" 出口output")]),t._v(" "),a("p",[t._v("output属性决定webpack在哪里输出他的bundles，以及如何命名这些文件。")]),t._v(" "),a("ul",[a("li",[t._v("filename: '输出bundle的名称'可以通过模版语法指定chunk或者name。")]),t._v(" "),a("li",[t._v("path：bundle的输出路径可以利用path.resolve()或者相对绝对路径来指定。")]),t._v(" "),a("li",[t._v("publicPath: 指定资源的访问路径，可以通过其设置cdn。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("publicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.example.com/assets/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CDN（总是 HTTPS 协议）")]),t._v("\npublicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//cdn.example.com/assets/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CDN (协议相同)")]),t._v("\npublicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/assets/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相对于服务(server-relative)")]),t._v("\npublicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assets/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相对于 HTML 页面")]),t._v("\npublicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../assets/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相对于 HTML 页面")]),t._v("\npublicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相对于 HTML 页面（目录相同）")])])])]),a("h2",{attrs:{id:"output相关的常用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output相关的常用插件"}},[t._v("#")]),t._v(" output相关的常用插件")]),t._v(" "),a("ul",[a("li",[t._v("1，根据特定的html模版自动生成html文件并且引用生成的chunk：html-webpack-plugin")]),t._v(" "),a("li",[t._v("2, 清理dist文件夹插件：clean-webpack-plugin")]),t._v(" "),a("li",[t._v("3，分离css文件mini-css-extract-plugin。")])]),t._v(" "),a("h2",{attrs:{id:"hash，chunkhash，contenthash的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash，chunkhash，contenthash的区别"}},[t._v("#")]),t._v(" hash，chunkhash，contenthash的区别")]),t._v(" "),a("ul",[a("li",[t._v("hash：针对整个项目的，所有文件的hash值保持一致，只要改变了内容那么所有文件的缓存都会失效。没有起到灵活缓存的作用")]),t._v(" "),a("li",[t._v("chunkhash：针对单个chunk，我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成hash值，那么只要我们不改动公共库的代码，就可以保证其hash值不会受影响。由于采用chunkhash，所以项目主入口文件main.js及其对应的依赖文件main.css由于被打包在同一个模块，所以共用相同的chunkhash。这样就会有个问题，只要对应css或则js改变，与其关联的文件hash值也会改变，但其内容并没有改变，所以没有达到缓存意义。")]),t._v(" "),a("li",[t._v("contenthash: 针对css来定，可以用上边讲到的mini-css-extract-plugin将css设置为contenthash，解决上述问题。\n首先我们看下设置hash的效果")]),t._v(" "),a("li",[t._v("当为hash时候")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  vender"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/js/feature.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\noutput"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[hash].bundle.js"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ffe7d4b5c650129bc62636c820a5d60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76.2")]),t._v(" KiB          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96938e518")]),t._v("e345c331da8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("556")]),t._v(" KiB    main  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96938e518")]),t._v("e345c331da8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("552")]),t._v(" KiB  vender  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vender\n                          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("644")]),t._v(" bytes          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n                            main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71")]),t._v(" bytes    main  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的main.js 和vender.js的hash值都是一样的。我们改了任何一个文件这个hash值都会随着改变                            ")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当为chunkhash时候")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[chunkhash].[name].js"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当为chunkhash时候")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),t._v("b1e128f05b3717777e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("556")]),t._v(" KiB    main  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ffe7d4b5c650129bc62636c820a5d60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76.2")]),t._v(" KiB          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("970015")]),t._v("a42dcfd539dbf9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("552")]),t._v(" KiB  vender  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vender\n                          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("644")]),t._v(" bytes          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n                            main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71")]),t._v(" bytes    main  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时main.js和vender.js的hash值就不相同了。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候我们改动一下css文件，看这个时候chunkhash会不会变化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ffe7d4b5c650129bc62636c820a5d60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76.2")]),t._v(" KiB          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("94")]),t._v("c3aef25997acdad05a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("556")]),t._v(" KiB    main  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("970015")]),t._v("a42dcfd539dbf9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("552")]),t._v(" KiB  vender  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vender\n                          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("644")]),t._v(" bytes          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n                            main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),t._v(" bytes    main  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以看到man.js的hash值变化了，但是main.js却没有任何改变。这种情况我们怎么解决呐？")]),t._v("\n                            \n")])])]),a("ul",[a("li",[t._v("当为contenthash时候")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MiniCssExtractPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        chunkFilename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[contenthash]_[name].css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ignoreOrder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时")]),t._v("\nAsset       Size  Chunks             Chunk Names\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6e18")]),t._v("c6225511a508ae47_common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v(" bytes       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  common\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("738e49")]),t._v("ffe8fedfd1f1a6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70.2")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  common\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ffe7d4b5c650129bc62636c820a5d60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76.2")]),t._v(" KiB          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n   b5bd448011ae04c44ad9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n b8b76d60baccba2a8b74"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.47")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vender\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候我们再修改下css文件看下效果")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("ba4fc91fb13fb0a9e4e_common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" bytes       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  common\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ffe7d4b5c650129bc62636c820a5d60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76.2")]),t._v(" KiB          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n         b5bd448011ae04c44ad9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n       b8b76d60baccba2a8b74"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.47")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vender\n       f3df7823bfd50f18a7d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70.2")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  common\n                           index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("744")]),t._v(" bytes          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候我们发现common.css的hash值变化了，然后main.js的hash值却没有变化。起到了缓存的作用                           ")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);