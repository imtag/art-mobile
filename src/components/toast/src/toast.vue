<template>
  <div class="art-toast" :class="toastClass">
    <art-icon 
      v-if="type !== 'info'" 
      class="art-toast__icon"
      size="middle"
      :name="iconName">
    </art-icon>
    <span class="art-toast__text">{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data () {
      return {
        message: '',
        duration: 1500,
        type: 'info'
      }
    },
    computed: {
      toastClass () {
        return [
          `art-toast--${this.type}`
        ]
      },
      iconName () {
        let name = ''
        if (this.type === 'success') {
          name = 'round_check'
        } else if (this.type === 'fail') {
          name = 'round_close'
        } else if (this.type === 'loading') {
          name = 'loading'
        }
        return name
      }
    },
    mounted () {
      setTimeout(() => {
        if (this.$el.parentNode) {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }
      }, this.duration)
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-toast {
    z-index: 111;
    padding: 12px 20px;
    border-radius: $border-radius;
    text-align: center;
    color: $color-neutral-light;
    background-color: rgba(0, 0, 0, .7);
    @include center;
    &__icon {
      margin-right: 3px;
      color: $color-neutral-light;
    }
    &__text {
      vertical-align: middle;
    }
  }
</style>
