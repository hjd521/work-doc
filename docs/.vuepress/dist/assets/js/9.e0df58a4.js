(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(n,t,s){"use strict";s.r(t);var e=s(28),o=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h3",{attrs:{id:"async-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async-demo"}},[this._v("#")]),this._v(" async demo")]),this._v(" "),t("ul",[t("li",[this._v("由于async函数中有await命令的语句是同步执行的，就会造成两个独立的异步操作形成继发执行的效果。这样性能是差的，因此我们要做并发执行。")])]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("// 通过使用Promise.all来实现\nfunction runAsync() {\n  let [foo, bar] = await Promise.all([getFoo(),getBar()])\n}\n// 使用forEach\nfunciton runAsync() {\n  ['foo', bar].forEach( async (item) => {\n    await getUrl[item]()\n  })\n}\n// 使用map+for of\nasync function dbFuc(db) {\n  let docs = [{}, {}, {}];\n  let promises = docs.map((doc) => db.post(doc));\n\n  let results = [];\n  for (let promise of promises) {\n    results.push(await promise);\n  }\n  console.log(results);\n}\n// 并行执行异步操作，次序拿到结果\nasync function logInOrder(urls) {\n  // 并发读取远程URL\n  const textPromises = urls.map(async url => {\n    const response = await fetch(url);\n    return response.text();\n  });\n\n  // 按次序输出\n  for (const textPromise of textPromises) {\n    console.log(await textPromise);\n  }\n}\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);