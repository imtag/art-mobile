<template>
  <i 
    class="art-icon" 
    :class="iconClass"
    :style="iconStyle">
  </i>
</template>

<script>
  export default {
    name: 'ArtIcon',
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false
      },
      bold: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return [
            'small',
            'normal',
            'middle',
            'large',
            'x-large'
          ].indexOf(value) > -1
        }
      }
    },
    computed: {
      iconClass () {
        return [
          `art-icon-${this.name}`,
          `art-icon__${this.size}`,
          {
            'art-icon-arrow-left': ['arrow-right', 'arrow-up', 'arrow-down'].indexOf(this.name) > -1
          }
        ]
      },
      iconStyle () {
        return {
          'color': this.color,
          'fontWeight': this.bold ? 'bold' : 'normal'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-icon {
    color: $color-neutral-content;
    &__small {
      font-size: $font-size-normal;
    }
    &__normal {
      font-size: $font-size-large;
    }
    &__middle {
      font-size: $font-size-large-xx;
    }
    &__large {
      font-size: $font-size-large-xxx;
    }
    &__x-large {
      font-size: $font-size-large-xxxx
    }
  }
</style>
