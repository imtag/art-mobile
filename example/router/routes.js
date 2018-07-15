import Home from 'example/views/home.vue'
// basic
import Button from 'src/components/button/demo'
import Color from 'example/views/color.vue'
import Icon from 'example/views/icon.vue'
import Loading from 'example/views/loading.vue'
// nav
import Tabs from 'example/views/tabs.vue'
import Layout from 'example/views/layout.vue'
// form
import Input from 'example/views/input.vue'
import Switch from 'example/views/switch.vue'
import Radio from 'example/views/radio.vue'
// scroll
import Scroll from 'example/views/scroll.vue'
import Date from 'example/components/date.vue'
import Toast from 'src/components/toast/demo'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
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
        path: '/basic/date',
        name: 'date',
        component: Date,
        meta: { title: 'Date 日历' }
      },
      {
        path: '/basic/layout',
        name: 'layout',
        component: Layout,
        meta: { title: 'Layout 布局' }
      },
      {
        path: '/basic/button',
        name: 'button',
        component: Button,
        meta: { title: 'Button 按钮' }
      },
      {
        path: '/basic/color',
        name: 'color',
        component: Color,
        meta: { title: 'Color 色彩' }
      },
      {
        path: '/basic/icon',
        name: 'icon',
        component: Icon,
        meta: { title: 'Icon 图标' }
      },
      {
        path: '/basic/loading',
        name: 'loading',
        component: Loading,
        meta: { title: 'Loading 加载中' }
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
        name: 'tabs',
        component: Tabs,
        meta: { title: 'Tabs 标签页' }
      },
      {
        path: '/nav/tabs',
        name: 'tabs',
        component: Tabs,
        meta: { title: 'Tabbar 标签栏' }
      },
      {
        path: '/nav/tabs',
        name: 'tabs',
        component: Tabs,
        meta: { title: 'Header 头部' }
      },
      {
        path: '/nav/tabs',
        name: 'tabs',
        component: Tabs,
        meta: { title: 'Search 搜索框' }
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
        name: 'Input',
        component: Input,
        meta: { title: 'Input 输入框' }
      },
      {
        path: '/form/radio',
        name: 'radio',
        component: Radio,
        meta: { title: 'Radio 单选框' }
      },
      {
        path: '/form/radio',
        name: 'radio',
        component: Radio,
        meta: { title: 'Checkbox 复选框' }
      },
      {
        path: '/form/switch',
        name: 'switch',
        component: Switch,
        meta: { title: 'Switch 开关' }
      },
      {
        path: '/form/switch',
        name: 'switch',
        component: Switch,
        meta: { title: 'Form 表单' }
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
        path: '/form/switch',
        name: 'switch',
        component: Switch,
        meta: { title: 'Swiper 轮播' }
      },
      {
        path: '/scroll/scroll',
        name: 'scroll',
        component: Scroll,
        meta: { title: 'Scroll 滚动' }
      },
      {
        path: '/form/radio',
        name: 'radio',
        component: Radio,
        meta: { title: 'Sticky 黏贴' }
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
        name: 'toast',
        component: Toast,
        meta: { title: 'Toast 提示' }
      },
      {
        path: '/form/input',
        name: 'input',
        component: Input,
        meta: { title: 'ActionSheet 操作列表' }
      },
      {
        path: '/form/radio',
        name: 'radio',
        component: Radio,
        meta: { title: 'Dialog 对话框' }
      },
      {
        path: '/form/radio',
        name: 'radio',
        component: Radio,
        meta: { title: 'Picker 选择器' }
      }
    ]
  }
]
