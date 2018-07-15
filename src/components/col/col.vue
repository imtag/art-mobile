<template>
  <div class="art-col" :style="colStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ArtCol',
    props: {
      span: {
        type: Number,
        required: true
      }
    },
    computed: {
      colStyle () {
        let styleObj = {
          width: (this.span / 24 * 100) + '%'
        }
        if (this.$parent.gutter !== 0) {
          const gutter = this.$parent.gutter / 2
          styleObj.paddingLeft = styleObj.paddingRight = gutter + 'px'
        }
        return styleObj
      }
    }
  }
</script>

<style lang="scss">
  .art-col {
    float: left;
    box-sizing: border-box;
  }
</style>