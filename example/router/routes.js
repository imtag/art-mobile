import Home from 'example/views/home.vue'
// basic
import Button from 'src/components/button/demo'
import Color from 'example/views/color.vue'
import Icon from 'example/views/icon.vue'
import Loading from 'example/views/loading.vue'
import Tag from 'src/components/tag/demo'
// nav
import Tabs from 'example/views/tabs.vue'
import Layout from 'example/views/layout.vue'
// form
import Input from 'example/views/input.vue'
import Radio from 'example/views/radio.vue'
// scroll
import Scroll from 'example/views/scroll.vue'
// feedback
import Toast from 'src/components/toast/demo'
import Dialog from 'src/components/dialog/demo'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/basic',
    meta: {
      title: '基础',
      isCategory: true
    },
    component: Home,
    children: [
      {
        path: '/basic/color',
        component: Color,
        meta: { title: 'Color 色彩', finish: true }
      },
      {
        path: '/basic/icon',
        component: Icon,
        meta: { title: 'Icon 图标', finish: true }
      },
      {
        path: '/basic/layout',
        component: Layout,
        meta: { title: 'Layout 布局', finish: true }
      },
      {
        path: '/basic/button',
        component: Button,
        meta: { title: 'Button 按钮', finish: true }
      },
      {
        path: '/basic/loading',
        component: Loading,
        meta: { title: 'Loading 加载中', finish: true }
      },
      {
        path: '/basic/tag',
        component: Tag,
        meta: { title: 'Tag 标签', finish: true }
      }
    ]
  },
  {
    path: '/nav',
    meta: {
      title: '导航',
      isCategory: true
    },
    component: Home,
    children: [
      {
        path: '/nav/tabs',
        component: Tabs,
        meta: { title: 'Tabs 标签页', finish: true }
      },
      {
        path: '/nav/tabs',
        component: Tabs,
        meta: { title: 'Tabbar 标签栏', finish: false }
      },
      {
        path: '/nav/tabs',
        component: Tabs,
        meta: { title: 'Header 头部', finish: false }
      },
      {
        path: '/nav/tabs',
        component: Tabs,
        meta: { title: 'Search 搜索框', finish: false }
      }
    ]
  },
  {
    path: '/form',
    meta: {
      title: '表单',
      isCategory: true
    },
    component: Home,
    children: [
      {
        path: '/form/input',
        component: Input,
        meta: { title: 'Input 输入框', finish: true }
      },
      {
        path: '/form/radio',
        component: Radio,
        meta: { title: 'Radio 单选框', finish: true }
      },
      {
        path: '/form/radio',
        component: Radio,
        meta: { title: 'Checkbox 复选框', finish: false }
      },
      {
        path: '/form/radio',
        component: Radio,
        meta: { title: 'Switch 开关', finish: false }
      },
      {
        path: '/form/radio',
        component: Radio,
        meta: { title: 'Form 表单', finish: false }
      }
    ]
  },
  {
    path: '/feedback',
    meta: {
      title: '操作反馈',
      isCategory: true
    },
    component: Home,
    children: [
      {
        path: '/feedback/toast',
        component: Toast,
        meta: { title: 'Toast 提示', finish: true }
      },
      {
        path: '/feedback/dialog',
        component: Dialog,
        meta: { title: 'Dialog 对话框', finish: true }
      },
      {
        path: '/form/input',
        component: Input,
        meta: { title: 'ActionSheet 操作列表', finish: false }
      },
      {
        path: '/form/radio',
        component: Radio,
        meta: { title: 'Picker 选择器', finish: false }
      }
    ]
  },
  {
    path: '/scroll',
    meta: {
      title: '滚动',
      isCategory: true
    },
    component: Home,
    children: [
      {
        path: '/scroll/scroll',
        component: Scroll,
        meta: { title: 'Scroll 滚动', finish: true }
      },
      {
        path: '/scroll/scroll',
        component: Scroll,
        meta: { title: 'Swiper 轮播', finish: false }
      },
      {
        path: '/form/radio',
        component: Radio,
        meta: { title: 'Sticky 黏贴', finish: false }
      }
    ]
  }
]
