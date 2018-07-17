import Toast from './src/toast.js'

Toast.install = Vue => {
  Vue.prototype.$Toast = Toast
}

export default Toast
