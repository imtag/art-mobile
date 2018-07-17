<template>
  <div class="art-tag" :class="tagClass">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ArtTag',
    props: {
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
      shape: {
        type: String,
        default: 'square',
        validator (value) {
          return [
            'square',
            'fillet',
            'circle'
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
      plain: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tagClass () {
        return [
          `art-tag--${this.type}`,
          `art-tag--${this.shape}`,
          `art-tag--${this.size}`,
          {
            'art-tag--plain': this.plain
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/mixins/index.scss';
  @import '~src/styles/themes/default.scss';
  .art-tag {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    &--default {
      border: 1px solid #ddd;
      color: $color-neutral-sub;
      background-color: $color-neutral-transparent;
    }
    &--primary {
      border: 1px solid $color-primary;
      color: $color-neutral-light;
      background-color: $color-primary;
      &.art-tag--plain {
        background-color: $color-neutral-transparent;
        color: $color-primary;
      }
    }
    &--danger {
      border: 1px solid $color-sub-error;
      color: $color-neutral-light;
      background-color: $color-sub-error;
      &.art-tag--plain {
        background-color: $color-neutral-transparent;
        color: $color-sub-error;
      }
    }
    &--fillet {
      border-radius: $border-radius;
    }
    &--circle {
      border-radius: 26px;
    }
    &--small {
      padding: 2px 3px;
      font-size: $font-size-small;
    }
    &--normal {
      font-size: $font-size-small;
      padding: 4px 8px;
    }
    &--large {
      font-size: $font-size-normal;
      padding: 5px 10px;
    }
  }
</style>
