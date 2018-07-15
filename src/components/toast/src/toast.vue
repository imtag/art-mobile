<template>
  <div class="art-toast">{{ message }}</div>
</template>

<script>
  export default {
    name: 'Toast',
    data () {
      return {
        message: '',
        visible: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }, 2000)
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-toast {
    z-index: 111;
    bottom: 150px;
    padding: 8px 15px;
    border-radius: $border-radius;
    color: $color-neutral-light;
    background-color: rgba(0, 0, 0, .8);
    @include horizontal-center;
  }
</style>
