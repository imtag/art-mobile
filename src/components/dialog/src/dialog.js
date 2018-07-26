import Vue from 'vue'
import dialogComponent from './dialog.vue'

const DialogConstructer = Vue.extend(dialogComponent)

// 当前dilog配置（options、callback）
let dialogConfig = null
let instance = null

/**
 * dialog回调
 * @param {string} action 用户行为（confirm、cancel)
 */
const defultCallback = action => {
  if (dialogConfig) {
    // 执行callback回调
    const callback = dialogConfig.callback
    if (typeof callback === 'function') {
      callback(action)
    }

    // 执行promise回调
    if (dialogConfig.resolve && action === 'confirm') {
      dialogConfig.resolve(action)
    } else if (dialogConfig.reject && action === 'cancel') {
      dialogConfig.reject(action)
    }
  }
}

/**
 * 组件销毁钩子
 */
const beforeDestroy = () => {
  instance = null
  dialogConfig = null
}

/**
 * 实例化并挂载dialog
 */
const showDialog = () => {
  // 实例化
  instance = new DialogConstructer({
    beforeDestroy
  }).$mount()
  instance.callback = defultCallback
  instance.action = ''

  // 设置属性
  const options = dialogConfig.options
  for (const prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }

  // 非callback回调
  if (typeof options.callback !== 'function') {
    instance.callback = defultCallback
  }

  // 挂载dom，显示组件
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

/**
 * 主函数
 * @param {object} options 配置项
 */
const Dialog = (options) => {
  let callback = null
  if (options.callback) {
    callback = options.callback
  }

  dialogConfig = {
    options,
    callback
  }

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      dialogConfig.resolve = resolve
      dialogConfig.reject = reject
      showDialog()
    })
  } else {
    showDialog()
  }
}

/**
 * 消息对话框
 * @param {object} options 配置项
 */
Dialog.alert = (options) => {
  return Dialog(Object.assign({
    type: 'alert'
  }, options))
}

/**
 * 确认对话框
 * @param {object} options 配置项
 */
Dialog.confirm = (options) => {
  return Dialog(Object.assign({
    type: 'confirm'
  }, options))
}

export default Dialog
