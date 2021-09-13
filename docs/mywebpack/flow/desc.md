### webpack运行流程说明
1. 从命令行参数以及配置文件中拿到webpack的运行参数与默认参数进行合并生成最终的参数配置。
2. 调用compiler类。
3. 注册webpack的plugin
4. 执行compiler的run方法进行编译
```
  let Compiler = require('compiler')
  function webpack(options) {
    let argv = process.argv.slice(2)
    let shellOptions = argv.reduce((config, cur) => {
      let [key,value] = cur.split('=')
      config[key] = value
    }, {})
    let finalOptions = { ...options, ...shellOptions } // 拿到最终的参数结果。
    let compiler = new Compiler(finalOptions)
    // chuli
    for (let plugin in options.pllugins) {
      plugin.apply(compiler)
    }
    copmpiler.run()
  }
```
5. compiler类注册tapable钩子，用来通知插件在特定的时间点做对应的事情。
6. 执行compiler的compile方法执行compilation类执行build方法进行具体的构建，并且在回调中将文件输出到dist文件。
```
  let { SyncHook } = require("tapable");
  let fs = require("fs");
  let path = require("path");
  let Complication = require("./Complication");
  class Compiler {
    constructor() {
      this.options = options;
      this.hooks = {
        run: new SyncHook(), //会在开始编译的时候触发
        done: new SyncHook(), //会在结束编译的时候触发
      }
    }
    run(callback) {
      let onCompiled = function(err, states) {
        if(err) {
          console.log(err)
        } else {
          // 将代码输出到dist文件夹下
        }
      }
      this.compile(onCompiled)
    }
    compile(callback) {
      let complication = new Complication(this.options);
      complication.build(callback);
    }
  }
```
7. complication执行build从entry入口查找文件执行loaders进行转换。
8. 找到模块的导入语句进行ast分析，将引入的依赖的模块放到本模块的依赖数组中。并且每个模块都赋值三个属性，id(path路径)，name(入口模块), dependencies(依赖的模块)
```
let types = require("babel-types");
let parser = require("@babel/parser");
let traverse = require("@babel/traverse").default;
let generator = require("@babel/generator").default;
let dirPath = toUnixPath(process.pwd())
function toUnixPath(path) {
  return path.replace(/\\/g, '/')
}
class Complication {
  constructor() {
    constructor(options) {
      this.options = options;
      this.modules = []; //存放着本次编译生产所有的模块 所有的入口产出的模块
      this.chunks = []; //代码块的数组
      this.assets = {}; //产出的资源
      this.fileDependencies = [];
    }
  },
  // build，根据entry开始构建流程
  build(callback) {
    let entryConfig = this.options.entry
    let entry = {}
    if (typeof entry === 'string') {
      entry.main = entryConfig
    } else {
      entry = entryConfig
    }
    for (let key in entry) {
      let filePath = entry[key]
      // 拿到入口文件的真实路径
      let entryFilePath = path.posix.join(dirPath, filePath)
      let entryModule = this.buildModule(key, entryFilePath) // 入口模块的key以及相应的绝对路径，最终将所有模块转换完毕之后都放入modules数组中，且有唯一的入口表示name：代表从哪个entry中构建的。将来方便生成代码
      //生成chunk-根据入口名称以及modules中的name对应，构建chunk: {name, entryModule, modules}
      let chunk = {
        name: entryName,
        entryModule,
        modules: this.modules.map((item) => {return item.name === entryName})
      }
      this.chunks.push(chunk);
    }
    // 再根据chunks构建输出到文件的真实资源放到assets中{fileName: 代码资源}
    this.chunks.forEach((chunk) => {
      let filename = this.options.output.filename.replace("[name]", chunk.name);
      this.assets[filename] = getSource(chunk);
    });
    callback(null,  {
        chunks: this.chunks,
        modules: this.modules,
        assets: this.assets,
      },)
  }
  // 调用loader转换代码
    // 利用ast分析依赖循环遍历
    // 遍历依赖递归执行buildModule
    buildModule(entryName, modulePath) {
      let loaders = []
      let sourceCode = fs.readFileSync(modulePath, "utf8")
      let sourceCode
      for (let loader in this.options.module.rules) {
        if (loader.test.test(entryPath)) {
          loaders.push(loader.use)
        }
      }
      for (let i = loaders.length-1; i>= 0;i++) {
        sourceCode = require(loader)(sourceCode)
      }
      let moduleId = "./" + path.posix.relative(dirPath, modulePath)
      let module = {name: entryName, dependencies: [], moduleId}
      let ast = parser.parse(sourceCode, { sourceType: "module" })
      traverse(ast, {
        'CallExpression': function ({node}) {
           if (node.callee === 'require') {
             let depModuleName = node.arguments[0].value
             let dirname = path.posix.dirname(modulePath)
           }
        }
      })
    }
}
```