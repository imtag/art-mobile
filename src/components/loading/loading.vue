<template>
  <svg class="art-loading" :class="loadingClass" :style="loadingStyle" id="spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="5" height="17" fill="#80848f" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="0s" repeatCount="indefinite"/></rect></svg>
</template>

<script>
  export default {
    name: 'ArtLoading',
    props: {
      size: {
        type: Number,
        default: 22
      },
      align: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'center',
            'vertical',
            'horizontal'
          ].indexOf(value) > -1
        }
      }
    },
    computed: {
      loadingClass () {
        return [
          'art-loading--' + this.align
        ]
      },
      loadingStyle () {
        return {
          fill: '',
          width: this.size + 'px',
          height: this.size + 'px'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/mixins/index.scss';
  .art-loading {
    &--vertical {
      @include vertical-center;
    }
    &--horizontal {
      @include horizontal-center;
    }
    &--center {
      @include center;
    }
  }
</style>
