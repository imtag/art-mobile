<template>
  <div class="art-loading" :class="loadingClass">
    <art-icon 
      name="loading"
      :size="size"
      :color="color">
    </art-icon>
    <span class="art-loading__message">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  import Icon from 'src/components/icon'
  export default {
    name: 'ArtLoading',
    components: {
      [Icon.name]: Icon
    },
    props: {
      color: String,
      size: String,
      align: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'center',
            'vertical',
            'horizontal'
          ].indexOf(value) > -1
        }
      }
    },
    computed: {
      loadingClass () {
        return [
          'art-loading--' + this.align
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/mixins/index.scss';
  @import '~src/styles/themes/default.scss';
  .art-loading {
    display: inline-block;
    vertical-align: middle;
    &__message {
      vertical-align: middle;
      margin-left: 3px;
      font-size: $font-size-normal;
      color: $color-neutral-content;
    }
    &--vertical {
      @include vertical-center;
    }
    &--horizontal {
      @include horizontal-center;
    }
    &--center {
      @include center;
    }
  }
</style>
