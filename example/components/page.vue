<template>
  <div class="art-page">
    <div class="art-page-header">
      <h1 class="art-page-header__title">
        {{ $route.meta.title }}
      </h1>
      <art-icon 
        name="arrow-left"
        @click.native="goBack">
      </art-icon>
    </div>
    <div class="art-page-body">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page',
    methods: {
      goBack () {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: $color-neutral-gray;
    &-header {
      position: relative;
      height: 44px;
      line-height: 44px;
      background-color: $color-neutral-light;
      @include border-bottom-1px;
      &__title {
        text-align: center;
        font-size: $font-size-large;
        font-weight: 500;
        color: $color-neutral-title;
      }
      .art-icon {
        height: 100%;
        line-height: 44px;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 12px;
        color: $color-primary;
      }
    } 
    &-body {
      position: absolute;
      top: 44px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
    }
  }
</style>
