(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(e,r,t){"use strict";t.r(r);var a=t(28),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"实现promise-race方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现promise-race方法"}},[e._v("#")]),e._v(" 实现promise.race方法")]),e._v(" "),t("h4",{attrs:{id:"实现目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现目标"}},[e._v("#")]),e._v(" 实现目标")]),e._v(" "),t("ul",[t("li",[e._v("接收一个promise数组，数组中第一个改变状态的实例的值，作为race的值")])]),e._v(" "),t("h4",{attrs:{id:"实现步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[e._v("#")]),e._v(" 实现步骤")]),e._v(" "),t("ol",[t("li",[e._v("promise.race需要返回一个新的promise实例。")]),e._v(" "),t("li",[e._v("遍历promise数组，绑定then方法，在成功是调用promise.race的resolve出去，并且阻断循环。")]),e._v(" "),t("li",[e._v("then方法的第二个参数调用collect收集错误信息当所有数组都reject之后调用race的reject。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Promise.race = function(arr) {\n  return new Promise((resolve, reject) => {\n    for (let i =0;i<arr.length;i++) {\n      let cur = arr[i]\n      if (isPromise(cur)) {\n        cur.then((x) => {\n          resolve(x)\n          breack;\n        }, (err) => {\n          reject(x)\n          break;\n        })\n      } else {\n        resolve(cur);\n        breack;\n      }\n    }\n  })\n}\n")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);