import SwiperItem from '../swiper/src/swiper-item.vue'

SwiperItem.install = Vue => {
  Vue.component(SwiperItem.name, SwiperItem)
}

export default SwiperItem
