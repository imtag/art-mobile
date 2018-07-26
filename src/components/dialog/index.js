import Dialog from './src/dialog.vue'
import $Dialog from './src/dialog.js'

Dialog.install = Vue => {
  Vue.component(Dialog.name, Dialog)
  Vue.prototype.$Dialog = $Dialog
}

export default Dialog
