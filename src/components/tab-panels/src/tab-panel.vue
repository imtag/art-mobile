<template>
  <li 
    class="art-tab-panel"
    :style="tabPanelStyle">
    <slot />
  </li>
</template>

<script>
  export default {
    name: 'ArtTabPanel',
    props: {
      id: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      tabPanelStyle () {
        return {
          'display': this.id === this.$parent.value ? 'block' : 'none'
        }
      }
    }
  }
</script>