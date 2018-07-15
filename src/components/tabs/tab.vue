<template>
  <li 
    class="art-tabs-nav__item"
    :class="tabClass"
    @click="tabClick">
    <slot />
  </li>
</template>

<script>
  export default {
    name: 'ArtTab',
    props: {
      id: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      tabClass () {
        return {
          'art-tabs-nav__item--active': this.id === this.$parent.value
        }
      }
    },
    methods: {
      tabClick () {
        this.$parent.$emit('input', this.id)
      }
    }
  }
</script>
