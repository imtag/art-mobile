<template>
  <page>
    <div class="art-example-layout">
      <column title="基本使用">
        <art-row>
          <art-col :span="12">span 12</art-col>
          <art-col :span="12">span 12</art-col>
        </art-row>
        <space />
        <art-row>
          <art-col :span="8">span 8</art-col>
          <art-col :span="8">span 8</art-col>
          <art-col :span="8">span 8</art-col>
        </art-row>
      </column>
      
      <column title="增加间隙">
        <art-row :gutter="20">
          <art-col :span="8">span 8</art-col>
          <art-col :span="8">span 8</art-col>
          <art-col :span="8">span 8</art-col>
        </art-row>
      </column>
    </div>
  </page>
</template>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-example-layout {
    .art-col {
      line-height: 32px;
      background-color: $color-primary;
      text-align: center;
      color: $color-neutral-light;
      background-clip: content-box;
    }
  }
</style>
