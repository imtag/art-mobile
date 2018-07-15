<template>
  <div class="art-tabs">
    <ul class="art-tabs-nav">
      <slot />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ArtTabs',
    props: {
      value: {
        type: [String, Number],
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-tabs {
    &-nav {
      display: flex;
      justify-content: space-around;
      height: 40px;
      box-sizing: border-box;   
      font-size: $font-size-normal;
      color: $color-neutral-sub;
      @include border-1px;
      &__item {
        position: relative;
        z-index: 1;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        &--active {
          color: $color-neutral-title;
          border-bottom: 2px solid $color-primary;
        }
      }
    }
  }
</style>