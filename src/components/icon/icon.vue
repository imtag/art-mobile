<template>
  <i 
    class="art-icon" 
    :class="'art-icon-' + this.name"
    :style="iconStyle">
  </i>
</template>

<script>
  export default {
    name: 'ArtIcon',
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false
      },
      size: {
        type: Number,
        required: false
      },
      bold: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconStyle () {
        return {
          'fontSize': this.size + 'px',
          'color': this.color,
          'fontWeight': this.bold ? 'bold' : 'normal'
        }
      }
    }
  }
</script>