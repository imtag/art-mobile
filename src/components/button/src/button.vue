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
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'primary',
            'danger',
            'link'
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
      },
      inline: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass () {
        return [
          'art-button--' + this.type,
          'art-button--' + this.size,
          {
            'art-button--inline': this.inline,
            'art-button--plain': this.plain,
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
    display: block;
    width: 100%;
    text-align: center;
    border-radius: $button-radius;
    box-sizing: content-box;
    &--default {
      border: 1px solid #ddd;
      color: $color-neutral-title;
      background-color: $color-neutral-light;
      &.art-button--plain {
        background-color: $color-neutral-transparent;
      }
    }
    &--primary {
      border: 1px solid $button-primary-fill;
      color: $color-neutral-light;
      background-color: $button-primary-fill;
      &.art-button--plain {
        background-color: $color-neutral-transparent;
        color: $button-primary-fill;
      }
    }
    &--danger {
      border: 1px solid $button-danger-fill;
      color: $color-neutral-light;
      background-color: $button-danger-fill;
      &.art-button--plain {
        background-color: $color-neutral-transparent;
        color: $button-danger-fill;
      }
    }
    &--link {
      color: $color-primary;
      @include border-top-1px;
    }
    &--small {
      height: $button-small-height;
      line-height: $button-small-height;
      font-size: $button-small-font-size;
    }
    &--normal {
      height: $button-normal-height;
      line-height: $button-normal-height;
      font-size: $button-normal-font-size;
    }
    &--large {
      height: $button-large-height;
      line-height: $button-large-height;
      font-size: $button-large-font-size;
    }
    &--inline {
      display: inline-block;
      width: auto;
      &.art-button--small {
        padding: 0 10px;
      }
      &.art-button--normal {
        padding: 0 15px;
      }
      &.art-button--large {
        padding: 0 20px;
      }
    }
    &--disabled {
      opacity: .6;
    }
  }
</style>
