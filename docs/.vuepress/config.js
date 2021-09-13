module.exports = {
  base: '/study/',
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
        text: 'node',
        link: '/nodejs/'
      },
      {
        text: '异步编程',
        link: '/async/'
      },
      {
        text: 'webpack相关', link: '/mywebpack/flow/base'
      },
      {
        text: 'sass', link: '/sass/'
      },
      {
        text: '小程序', link: '/wx/'
      },
      {
        text: '面试题',
        link: '/job/zjhuawei'
      }
    ],
    sidebar: {
      '/nodejs/': [
        {
          title: '基础概念',
          collapsable: false, // 可选的, 默认值是 true,
          path: '/nodejs/'
        },
        {
          title: 'buffer',
          path: 'buffer/base'
        },
        {
          title: '多进程',
          path: '',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'process'
          ]
        }
      ],
      '/async/': [
        {
          title: 'promise',
          path: '',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'promise/desc',
            'promise/base',
            'promise/then',
            'promise/resolvepromise',
            'promise/all',
            'promise/race'
          ]
        },
        {
          title: 'async',
          path: '',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'async/desc',
            'async/demo'
          ]
        }
      ],
      '/mywebpack/': [
        {
          title: 'webpack的概念解析',
          path: '/mywebpack/flow/base',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1    // 可选的, 默认值是 1
        },
        {
          title: 'webpack运行流程描述',
          path: '/mywebpack/flow/desc',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1    // 可选的, 默认值是 1
        },
        {
          title: 'loader相关',
          path: '/mywebpack/loader/desc'
        },
        {
          title: 'plugin',
          path: '/mywebpack/plugin/tapable'
        }
      ],
      '/job/': [
        {
          title: '浙江华为',
          path: 'zjhuawei'
        }
      ],
      '/library/': [
        ['', 'package']
      ],
      '/sass/': [
        ['', 'mixin']
      ],
      '/wx/': [
        {
          title: '小程序总结',
          sidebarDepth: 2,
          children: [
            ['', '项目生成以及页面配置'],
            ['wxml', 'wxml语法']
          ]
        }

      ]
    }
  }
}