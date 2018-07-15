module.exports = {
  title: 'Art Mobile',
  description: 'An elegant mobile UI lib from Vue.js',
  base: '/art-mobile/doc/',
  dest: 'dist/doc',
  port: '6002',
  themeConfig: {
    nav: [
      { text: '文档', link: '/guide/introduce' },
      { text: '示例', link: 'https://jeely919.github.io/art-mobile/example' },
      { text: 'GitHub', link: 'https://github.com/jeely919/art-mobile' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '概览',
          collapsable: false,
          children: [
            'introduce',
            'quick-start'
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'button',
            'tabs'
          ]
        }
      ]
    }
  }
}

