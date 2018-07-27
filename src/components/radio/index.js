import Radio from '../radios/src/radio.vue'

Radio.install = Vue => {
  Vue.component(Radio.name, Radio)
}

export default Radio
