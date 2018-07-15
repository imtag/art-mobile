<template>
  <div class="art-column">
    <p class="art-column__title">{{ title }}</p>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Column',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-column {
    &__title {
      padding: 20px 0 10px;
      font-size: $font-size-small;
      color: $color-neutral-sub;
    }
  }
</style>
