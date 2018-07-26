<template>
  <div class="art-searchbar">
    <div class="art-searchbar__inner">搜索</div>
  </div>
</template>

<script>
  export default {
    name: 'ArtSearchbar'
  }
</script>

<style lang="scss">
  .art-searchbar {
    height: 44px;
    padding: 8px 12px;
    box-sizing: border-box;
    &__inner {
      display: flex;
      align-items: center;
      height: 28px;
      background-color: #f2f2f2;
      border-radius: 14px;
      color: #aaa;
      padding: 0 15px;
      font-size: 12px;
    }
  }
</style>
