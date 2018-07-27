<template>
  <div class="art-radios">
    <slot />
  </div>
</template>

<script>
  import Emitter from 'src/mixins/emitter.js'
  export default {
    name: 'ArtRadios',
    mixins: [Emitter],
    props: {
      value: [String, Number],
      position: {
        type: String,
        default: 'left',
        validator (value) {
          return [
            'left',
            'right'
          ].indexOf(value) > -1
        }
      }
    },
    watch: {
      value (newVal) {
        this.broadcast('ArtRadio', 'active-radio', newVal)
        this.$emit('change', newVal)
      }
    },
    mounted () {
      this.broadcast('ArtRadio', 'active-radio', this.value)
    }
  }
</script>