import Col from './col.vue'

Col.install = Vue => {
  Vue.component(Col.name, Col)
}

export default Col
