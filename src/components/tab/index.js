import Tab from '../tabs/src/tab.vue'

Tab.install = Vue => {
  Vue.component(Tab.name, Tab)
}

export default Tab
