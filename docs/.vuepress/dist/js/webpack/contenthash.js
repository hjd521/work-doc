module: {
  rules: {
    {
      test: /\.css$/,
      use: [
          {
              loader: MiniCssExtractPlugin.loader
          },
          {
              loader: 'css-loader'
          }
      ],
      exclude: [/node_modules/]
    }
  }
}
plugins: [
  new MiniCssExtractPlugin(
    {
        filename: '[name].css',
        chunkFilename: '[contenthash]_[name].css',
        ignoreOrder: false
    }
)
]
// 此时
Asset       Size  Chunks             Chunk Names
6e18c6225511a508ae47_common.css   43 bytes       0  [emitted]  common
 738e49ffe8fedfd1f1a6.common.js   70.2 KiB       0  [emitted]  common
7ffe7d4b5c650129bc62636c820a5d60.png   76.2 KiB          [emitted]  
   b5bd448011ae04c44ad9.main.js    1.5 KiB       1  [emitted]  main
 b8b76d60baccba2a8b74.vender.js   1.47 KiB       2  [emitted]  vender
 // 这个时候我们再修改下css文件看下效果
 2ba4fc91fb13fb0a9e4e_common.css   30 bytes       0  [emitted]  common
 7ffe7d4b5c650129bc62636c820a5d60.png   76.2 KiB          [emitted]  
         b5bd448011ae04c44ad9.main.js    1.5 KiB       1  [emitted]  main
       b8b76d60baccba2a8b74.vender.js   1.47 KiB       2  [emitted]  vender
       f3df7823bfd50f18a7d3.common.js   70.2 KiB       0  [emitted]  common
                           index.html  744 bytes          [emitted]  
// 这个时候我们发现common.css的hash值变化了，然后main.js的hash值却没有变化。起到了缓存的作用                           