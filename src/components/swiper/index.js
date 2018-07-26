import Swiper from './src/swiper.vue'

Swiper.install = Vue => {
  Vue.component(Swiper.name, Swiper)
}

export default Swiper
