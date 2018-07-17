import Vue from 'vue'
import ToastComponent from './toast.vue'

const ToastConstructor = Vue.extend(ToastComponent)
const ToastType = ['info', 'success', 'fail', 'loading']

const Toast = (options) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  const instance = new ToastConstructor({
    data: options
  })
  const vm = instance.$mount()
  document.body.appendChild(vm.$el)
}

ToastType.forEach(type => {
  Toast[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Toast(options)
  }
})

export default Toast
