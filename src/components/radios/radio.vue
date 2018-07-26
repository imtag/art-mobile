<template>
  <div class="art-radio" :class="radioClass">
    <label class="art-radio__wrap">
      <span class="art-radio__input">
        <span class="art-radio__inner" />
        <input 
          class="art-radio__origin" 
          type="radio"
          v-model="active"
          :value="id"
          :disabled="disabled" />
      </span>
      <div class="art-radio__content">
        <slot>{{ label }}</slot>
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
      label: [String, Number],
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
    },
    beforeDestroy () {
      this.$off('active-radio', null)
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-radio {
    box-sizing: border-box;
    padding: 0 16px;
    font-size: 14px;
    color: $color-neutral-content;
    &__wrap {
      display: flex;
      align-items: center;
      padding: 12px 0;
    }
    &__input {
      position: relative;
      margin-right: 5px;
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
    &__origin {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
    }
    &__content {
      flex: 1;
      line-height: 22px;
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

