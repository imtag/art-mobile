<template>
  <page>
    <div class="art-example-color">
      <column title="主色">
        <color-item title="Primary" color="#2d8cf0" />
        <space />
        <color-item title="Primary Light" color="#5cadff" />
        <space />
        <color-item title="Primary Dark" color="#2b85e4" />
      </column>

      <column title="辅助色">
        <color-item title="Sub Info" color="#2d8cf0" />
        <space />
        <color-item title="Sub Success" color="#19be6b" />
        <space />
        <color-item title="Sub Warning" color="#ff9900" />
        <space />
        <color-item title="Sub Error" color="#ed3f14" />
      </column>

      <column title="中性色">
        <color-item title="Neutral Title" color="#222222" />
        <space />
        <color-item title="Neutral Content" color="#495060" />
        <space />
        <color-item title="Neutral Sub" color="#80848f" />
        <space />
        <color-item class="item-color" title="Neutral Border" color="#f2f0f5" />
        <space />
        <color-item class="item-color" title="Neutral Gray" color="#f5f5f5" />
        <space />
        <color-item class="item-color" title="Neutral Light" color="#ffffff" />
      </column>

      <div class="hello">不错</div>
    </div>
  </page>
</template>

<script>
  import ColorItem from '../components/color-item.vue'
  export default {
    components: {
      ColorItem
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-example-color {
    .item-color {
      border: 1px solid $color-neutral-sub;
      color: $color-neutral-content;
    }
    .hello {
      margin: 20px;
      @include border-top-1px;
      @include border-right-1px;
      @include border-bottom-1px;
    }
  }
</style>

