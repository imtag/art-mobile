<template>
  <div class="art-color-item" :style="{ backgroundColor: color }">
    <p class="art-color-item__title">{{ title }}</p>
    <p class="art-color-item__color">{{ color }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ColorItem',
    props: {
      title: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-color-item {
    padding: 15px;
    color: $color-neutral-light;
    border-radius: $border-radius;
    &__title {
      font-size: $font-size-large;
    }
    &__color {
      padding-top: 8px;
      font-size: $font-size-small
    }
  }
</style>
