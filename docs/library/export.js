import Library from './library'
//对应的webpack配置
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'library.js',
  library: 'Library', // 暴露你的包为Library的全局变量在不设置libryTarget的情况下。
  libraryTarget: 'umd' // 当我们用import或者require方式时候使用的参数。
  // libraryTarget: 'this' // this 对象来访问
  // libraryTarget: 'window' // window对象来访问
  // libraryTarget: 'umd' // amd或者commonjs中require之后来访问
}
// package.json中的配置
main: "dist/Library.js"