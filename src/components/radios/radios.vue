<template>
  <div class="art-radios">
    <slot />
  </div>
</template>

<script>
  import Emitter from '../../mixins/emitter.js'
  export default {
    name: 'ArtRadios',
    mixins: [Emitter],
    props: {
      value: {
        type: [String, Number],
        required: true
      },
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

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-radios {
    font-size: 14px;
    color: $color-neutral-content;
  }
  .art-radio {
    box-sizing: border-box;
    padding: 0 16px;
    &__wrap {
      display: flex;
      align-items: center;
      padding: 12px 0;
    }
    &__content {
      flex: 1;
    }
    &__input {
      position: relative;
      margin-right: 8px;
    }
    &__origin {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      margin: 0;
      z-index: -1;
      outline: none;
    }
    &__inner {
      display: inline-block;
      width: 14PX;
      height: 14PX;
      border: 1PX solid $color-neutral-border;
      box-sizing: border-box;
      vertical-align: middle;
      border-radius: 50%;
    }
    &:not(:last-child) {
      .art-radio__wrap {
        @include border-bottom-1px;
      }
    }
    &--right {
      .art-radio__wrap {
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    }
    &--checked {
      .art-radio__inner {
        border: 4PX solid $color-primary;
      }
    }
    &--disabled {
      .art-radio__inner {
        background-color: $color-neutral-gray;
      }
    }
  }
</style>
