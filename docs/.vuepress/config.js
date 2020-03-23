module.exports = {
  base: '/',
  title: '知识点记录',
  description: '工作所用总结',
  themeConfig: {
    // sidebar: [
    //   ['/library/', 'library解析'],
    //   ['/package/', 'packagejson字段解析'],
    //   '/mywebpack'
    //   ['/mywebpack/', 'webpack总结']
    // ]
    nav: [
      {
        text: 'package相关', link: '/library/'
      },
      {
        text: 'webpack相关', link: '/mywebpack/'
      },
      {
        text: 'sass', link: '/sass/'
      },
      {
        text: '小程序', link: '/wx/'
      }
    ],
    sidebar: {
      '/mywebpack/': [
        ["", 'entry and output']
      ],
      '/library/': [
        ['', 'package']
      ],
      '/sass/': [
        ['', 'mixin']
      ],
      '/wx/': [
        ['', '项目生成以及页面配置']
      ]
    }
  }  
}