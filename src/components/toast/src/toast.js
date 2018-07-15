import Vue from 'vue'
import ToastComponent from './toast.vue'

const ToastConstructor = Vue.extend(ToastComponent)

const Toast = (message) => {
  const instance = new ToastConstructor({
    data: {
      message
    }
  })
  const vm = instance.$mount()
  document.body.appendChild(vm.$el)
}

export default Toast
