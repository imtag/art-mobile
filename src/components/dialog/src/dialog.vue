<template>
  <div class="art-dialog" v-if="value">
    <div class="art-dialog__wrap" :class="dialogClass">
      <art-icon 
        v-if="showClose" 
        class="art-dialog__close" 
        name="x"
        @click.native="$emit('input', false)">
      </art-icon>
      <h2 class="art-dialog__header">{{ title }}</h2>
      <div class="art-dialog__body">
        <slot />
      </div>
      <slot name="footer">
        <div class="art-dialog__footer">
          <art-button
            v-if="type === 'confirm'"
            class="art-dialog__footer-cancel"
            size="large"
            plain
            @click.native="cancelClick">
            {{ cancelText }}
          </art-button>
          <art-button
            type="link"
            size="large"
            @click.native="confirmClick">
            {{ confirmText }}
          </art-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import Icon from 'src/components/icon'
  import Button from 'src/components/button'
  export default {
    name: 'ArtDialog',
    components: {
      [Button.name]: Button,
      [Icon.name]: Icon
    },
    props: {
      value: {
        type: Boolean,
        required: true
      },
      type: {
        type: String,
        default: 'confirm',
        validator (value) {
          return [
            'confirm',
            'alert'
          ].indexOf(value) > -1
        }
      },
      showClose: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        required: true
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    computed: {
      dialogClass () {
        return [
          `art-dialog--${this.type}`
        ]
      }
    },
    methods: {
      cancelClick () {
        this.$emit('input', false)
        this.$emit('on-cancel')
      },
      confirmClick () {
        this.$emit('on-confirm')
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-dialog {
    @include mask;
    &__wrap {
      position: relative;
      width: 270px;
      background-color: $color-neutral-light;
      border-radius: 5px;
      @include center;
    }
    &__close {
      position: absolute;
      top: 8px;
      right: 10px;
      font-size: $font-size-large-x;
      color: $color-neutral-sub;
    }
    &__header {
      font-size: $font-size-large;
      text-align: center;
      padding-top: 25px;
      color: $color-neutral-title;
    }
    &__body {
      padding: 12px 18px 18px;
      line-height: 1.5;
      color: $color-neutral-sub;
    }
    &__footer {
      display: flex;
    }
    .art-dialog__footer-cancel {
      border: none;
      @include border-top-1px;
      @include border-right-1px;
    }
  }
</style>
