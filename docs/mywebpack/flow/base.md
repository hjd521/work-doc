### webpack基础名词解析
#### module：
1. 含义：模块，由资源(js,css,图片等)组成。
2. 组成：id(自身的相对路径名称)，dependencies(自身所引入的依赖),name(表示module属于哪个入口)。
3. 形成：资源由经过相对应的loader处理成为module。
```
{
  id: './src/title.js, //'自身相对于根路径的相对路径字符串
  name: 'main', // entry中配置的key
  dependencies: [], // 依赖子模块数组
  _sourceCode: '', // 经过转化的资源内容
}
```
##### chunk：
1. 含义：由一组拥有者共同入口的module组成。
2. 组成：name(entry中的key), entryModule(入口模块), modules(一组拥有相同name的module)。 
3. 作用：用来生成代码块(根据modules中的module和entryModule)。
```
  {
    name: 'main', // entry中的key。
    entryModule: module, // entry中的value对应的资源生成的module。
    modules: [], 具有相同入口name的module的子module的集合。
  }
```
#### chunk生成的代码
```
  function getSource(chunk) {
  return `
   (() => {
    var modules = {
      ${
          chunk.modules.map(module=>`
          "${module.id}": (module,exports,require) => {
            ${module._source}
          }`).join(',')
      }
    };
    var cache = {};
    function require(moduleId) {
      if (cache[moduleId]) {
        return cache[moduleId].exports;
      }
      var module = (cache[moduleId] = {
        exports: {},
      });
      modules[moduleId](module, module.exports, require);
      return module.exports;
    }
    (() => {
     ${chunk.entryModule._source}
    })();
  })();
   `;
}
```