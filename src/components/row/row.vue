<template>
  <div class="art-row" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ArtRow',
    props: {
      gutter: {
        type: Number,
        required: false,
        default: 0
      }
    },
    computed: {
      rowStyle () {
        let styleObj = {}
        if (this.gutter !== 0) {
          styleObj.marginLeft = styleObj.marginRight = -(this.gutter / 2) + 'px'
        }
        return styleObj
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/mixins/index.scss';
  .art-row {
    @include clearfix;
  }
</style>