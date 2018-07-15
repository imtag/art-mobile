<template>
  <page>
    <art-pull-down :top-method="loadTop" ref="loadmore">
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
      <p style="line-height:100px;text-align:center;">今天天很不错哦</p>
    </art-pull-down>
  </page>
</template>

<script>
  export default {
    methods: {
      loadTop () {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
        }, 3000)
      }
    }
  }
</script>