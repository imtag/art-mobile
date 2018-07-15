<template>
  <div class="art-tab-panels">
    <ul class="art-tab-panels">
      <slot />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ArtTabPanels',
    props: {
      value: {
        type: [String, Number],
        required: true
      }
    }
  }
</script>