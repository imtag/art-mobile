<template>
  <div class="art-column">
    <p v-if="title" class="art-column__title">{{ title }}</p>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Column',
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-column {
    padding: 0 12px;
    &__title {
      padding: 22px 0 10px;
      font-size: $font-size-small;
      color: $color-neutral-sub;
    }
  }
</style>
