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
        text: 'js相关',
        link: '/js/new'
      },
      {
        text: 'vue2源码分析',
        link: '/vue/dom-render/base'
      },
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
        text: '垃圾回收',
        link: '/recycle/base'
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
      '/js/': [
        {
          title: 'js中的new方法实现',
          path: '/js/new'
        },
        {
          title: '数据类型',
          path: '/js/base-type'
        },
        {
          title: '执行上下文',
          path: '/js/context'
        }
      ],
      '/vue/': [
        {
          title: 'vue中的普通dom渲染',
          path: '/vue/dom-render/base',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1    // 可选的, 默认值是 1
        },
        {
          title: 'vue组件相关',
          path: '/vue/component/register',
          collapsable: false, // 可选的, 默认值是 true
        }
      ],
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
      '/recycle': [
        {
          title: '垃圾回收',
          path: 'recycle/base'
        },
        {
          title: '新生代内存',
          path: 'recycle/new'
        },
        {
          title: '老生代内存',
          path: 'recycle/old'
        }
      ],
      '/job/': [
        {
          title: '浙江华为',
          path: 'zjhuawei'
        }
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