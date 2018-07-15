import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ArtMobile from '../src/main.js'
import Page from './components/page.vue'
import Column from './components/column.vue'
import Space from './components/space.vue'
import './utils/rem.js'
import './styles/index.scss'

Vue.use(ArtMobile)
Vue.component(Page.name, Page)
Vue.component(Column.name, Column)
Vue.component(Space.name, Space)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
