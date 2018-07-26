import Vue from 'vue'
import ToastComponent from './toast.vue'

const ToastConstructor = Vue.extend(ToastComponent)
const ToastType = ['info', 'success', 'fail', 'loading']

let instance = null

const beforeDestroy = () => {
  instance = null
}

const Toast = (options) => {
  if (instance && instance.$el && instance.$el.parentNode) {
    instance.$el.parentNode.removeChild(instance.$el)
  }

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  instance = new ToastConstructor({
    data: options,
    beforeDestroy
  }).$mount()
  document.body.appendChild(instance.$el)
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
