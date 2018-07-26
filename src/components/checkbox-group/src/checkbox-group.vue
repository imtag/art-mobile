<template>
  <div class="art-checkbox-group">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ArtCheckboxGroup',
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>