<template>
  <div class="art-toast" :class="toastClass">
    <art-icon 
      v-if="type !== 'info'" 
      class="art-toast__icon"
      :name="iconName" :size="16">
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
        duration: 3000,
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
          name = 'check-circle'
        } else if (this.type === 'fail') {
          name = 'x-circle'
        } else if (this.type === 'loading') {
          name = 'loader'
        }
        return name
      }
    },
    mounted () {
      setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
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
    background-color: rgba(0, 0, 0, .8);
    @include center;
    &__icon {
      margin-right: 3px; 
    }
    &__text {
      vertical-align: middle;
    }
    &--loading {
      .art-toast__icon {
        animation: rotate 1.5s linear infinite;
      }
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg)
      } 
      to {
        transform: rotate(360deg)
      }
    }
  }
</style>
