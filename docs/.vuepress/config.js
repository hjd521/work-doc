module.exports = {
  base: '/',
  title: 'ui-component-知识点总结',
  description: 'Just playing around',
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
      }
    ],
    sidebar: {
      '/mywebpack/': [
        ["", 'entry and output']
      ],
      '/library/': [
        ['', 'package']
      ]
    }
  }  
}