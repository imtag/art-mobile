<template>
  <page>
    <div class="art-example-icon">
      <column title="基本使用">
        <art-row :gutter="10">
          <art-col :span="8">
            <art-icon name="play" />  
            <span class="art-example-icon__name">return</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="homepage" />  
            <span class="art-example-icon__name">homepage</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="integral" />  
            <span class="art-example-icon__name">integral</span>
          </art-col>
        </art-row>
      </column>
      <space />
      <column title="图标大小">
        <art-row :gutter="10">
          <art-col :span="8">
            <art-icon name="return" :size="20" />  
            <span class="art-example-icon__name">return</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="homepage" :size="30" />  
            <span class="art-example-icon__name">homepage</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="integral" :size="40" />  
            <span class="art-example-icon__name">integral</span>
          </art-col>
        </art-row>
      </column>
      <space />
      <column title="图标颜色">
        <art-row :gutter="10">
          <art-col :span="8">
            <art-icon name="return" color="#19be6b" :size="26" />  
            <span class="art-example-icon__name">return</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="homepage" color="#ff9900" :size="26" />  
            <span class="art-example-icon__name">homepage</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="integral" color="#ed3f14" :size="26" />  
            <span class="art-example-icon__name">integral</span>
          </art-col>
        </art-row>
      </column>
      <space />
      <column title="图标加粗">
        <art-row :gutter="10">
          <art-col :span="8">
            <art-icon name="return" color="#19be6b" :size="26" :bold="true" />  
            <span class="art-example-icon__name">return</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="homepage" color="#ff9900" :size="26" :bold="true" />  
            <span class="art-example-icon__name">homepage</span>
          </art-col>
          <art-col :span="8">
            <art-icon name="integral" color="#ed3f14" :size="26" :bold="true" />  
            <span class="art-example-icon__name">integral</span>
          </art-col>
        </art-row>
      </column>
    </div>
  </page>
</template>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-example-icon {
    &__name {
      margin-top: 8px;
    }
    .art-col {
      display: flex;
      height: 80px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $color-neutral-light;
      border-radius: $border-radius;
      background-clip: content-box;
    }
  }
</style>

