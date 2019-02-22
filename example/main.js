import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ArtMobile from '../src/main.js'
// import FastClick from 'fastclick'
import Page from './components/page.vue'
import Column from './components/column.vue'
import Space from './components/space.vue'
import './utils/rem.js'
import './styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ArtMobile)
Vue.component(Page.name, Page)
Vue.component(Column.name, Column)
Vue.component(Space.name, Space)
Vue.use(ElementUI)

// FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
