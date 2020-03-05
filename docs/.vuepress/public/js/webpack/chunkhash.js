output: {
  path: path.resolve(__dirname, '../dist'),
  filename: "[chunkhash].[name].js"
}
// 当为chunkhash时候
39b1e128f05b3717777e.main.js    556 KiB    main  [emitted]  main
7ffe7d4b5c650129bc62636c820a5d60.png   76.2 KiB          [emitted]  
      970015a42dcfd539dbf9.vender.js    552 KiB  vender  [emitted]  vender
                          index.html  644 bytes          [emitted]  
                            main.css   71 bytes    main  [emitted]  main
// 此时main.js和vender.js的hash值就不相同了。
// 这个时候我们改动一下css文件，看这个时候chunkhash会不会变化
7ffe7d4b5c650129bc62636c820a5d60.png   76.2 KiB          [emitted]  
        94c3aef25997acdad05a.main.js    556 KiB    main  [emitted]  main
      970015a42dcfd539dbf9.vender.js    552 KiB  vender  [emitted]  vender
                          index.html  644 bytes          [emitted]  
                            main.css   65 bytes    main  [emitted]  main
// 可以看到man.js的hash值变化了，但是main.js却没有任何改变。这种情况我们怎么解决呐？
                            
