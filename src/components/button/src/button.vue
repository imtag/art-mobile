<template>
  <button 
    class="art-button" 
    :class="buttonClass"
    @click="buttonClick">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'ArtButton',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'primary',
            'danger'
          ].indexOf(value) > -1
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return [
            'small',
            'normal',
            'large'
          ].indexOf(value) > -1
        }
      }
    },
    computed: {
      buttonClass () {
        return [
          'art-button--' + this.type,
          'art-button--' + this.size,
          {
            'art-button--disabled': this.disabled
          }
        ]
      }
    },
    methods: {
      buttonClick (event) {
        if (this.disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/mixins/index.scss';
  @import '~src/styles/themes/default.scss';
  .art-button {
    text-align: center;
    font-size: $font-size-normal;
    border-radius: $border-radius;
    box-sizing: border-box;
    &--default {
      border: 1px solid $color-neutral-border;
      color: $color-neutral-content;
      background-color: $color-neutral-light;
    }
    &--primary {
      border: 1px solid $color-primary;
      color: $color-neutral-light;
      background-color: $color-primary;
    }
    &--danger {
      border: 1px solid $color-sub-error;
      color: $color-neutral-light;
      background-color: $color-sub-error;
    }
    &--small {
      height: 22px;
      line-height: 22px;
      padding: 0 8px;
      font-size: $font-size-small;
    }
    &--normal {
      height: 34px;
      line-height: 34px;
      padding: 0 15px;
    }
    &--large {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    &--disabled {
      opacity: .6;
    }
  }
</style>
