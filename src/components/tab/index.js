import Tab from '../tabs/tab.vue'

Tab.install = Vue => {
  Vue.component(Tab.name, Tab)
}

export default Tab
