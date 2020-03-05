entry: {
  main: path.resolve(__dirname,'../src/index.js'),
  vender: path.resolve(__dirname, '../src/js/feature.js')
},
output: {
  path: path.resolve(__dirname, '../dist'),
  filename: "[hash].bundle.js"
},

7ffe7d4b5c650129bc62636c820a5d60.png   76.2 KiB          [emitted]  
        96938e518e345c331da8.main.js    556 KiB    main  [emitted]  main
      96938e518e345c331da8.vender.js    552 KiB  vender  [emitted]  vender
                          index.html  644 bytes          [emitted]  
                            main.css   71 bytes    main  [emitted]  main
// 这里的main.js 和vender.js的hash值都是一样的。我们改了任何一个文件这个hash值都会随着改变                            
