import Searchbar from './src/searchbar.vue'

Searchbar.install = Vue => {
  Vue.component(Searchbar.name, Searchbar)
}

export default Searchbar
