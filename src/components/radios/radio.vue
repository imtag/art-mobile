<template>
  <div class="art-radio" :class="radioClass">
    <label class="art-radio__wrap">
      <div class="art-radio__input">
        <span class="art-radio__inner" />
        <input 
          class="art-radio__origin" 
          type="radio"
          v-model="active"
          :id="id"
          :value="id"
          :disabled="disabled" />
      </div>
      <div class="art-radio__content">
        <slot />
      </div>
    </label>
  </div>
</template>

<script>
  import Emitter from '../../mixins/emitter.js'
  export default {
    name: 'ArtRadio',
    mixins: [Emitter],
    props: {
      id: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: this.id
      }
    },
    computed: {
      radioClass () {
        return [
          `art-radio--${this.$parent.position}`,
          {
            'art-radio--checked': this.active === this.id,
            'art-radio--disabled': this.disabled
          }
        ]
      }
    },
    watch: {
      active (newVal) {
        this.dispatch('ArtRadios', 'input', newVal)
      }
    },
    mounted () {
      this.$on('active-radio', id => {
        this.active = id
      })
    }
  }
</script>
