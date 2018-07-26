<template>
  <page>
    <div class="art-example-icon">
      <column title="基本使用">
        <art-row :gutter="10">
          <art-col :span="6">
            <art-icon name="arrow-left" />  
            <span class="art-example-icon__name">arrow-left</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="arrow-right" />  
            <span class="art-example-icon__name">arrow-right</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="arrow-up" />
            <span class="art-example-icon__name">arrow-up</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="arrow-down" />  
            <span class="art-example-icon__name">arrow-down</span>
          </art-col>
        </art-row>
        <art-row :gutter="10" style="margin-top: 10px;">
          <art-col :span="6">
            <art-icon name="round_close" />  
            <span class="art-example-icon__name">round_close</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="round_check" />  
            <span class="art-example-icon__name">round_check</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="loading" />  
            <span class="art-example-icon__name">loading</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="close" />  
            <span class="art-example-icon__name">close</span>
          </art-col>
        </art-row>
      </column>

      <column title="图标尺寸">
        <art-row :gutter="10">
          <art-col :span="6">
            <art-icon name="round_close" size="small" />  
            <span class="art-example-icon__name">small</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="round_check" size="middle" />  
            <span class="art-example-icon__name">middle</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="loading" size="large" />  
            <span class="art-example-icon__name">large</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="close" size="x-large" />  
            <span class="art-example-icon__name">x-large</span>
          </art-col>
        </art-row>
      </column>

      <column title="图标加粗">
        <art-row :gutter="10">
          <art-col :span="6">
            <art-icon name="round_close" size="small" :bold="true" />  
            <span class="art-example-icon__name">round_close</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="round_check" size="middle" :bold="true" />  
            <span class="art-example-icon__name">round_check</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="loading" size="large" :bold="true" />  
            <span class="art-example-icon__name">loading</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="close" size="x-large" :bold="true" />  
            <span class="art-example-icon__name">close</span>
          </art-col>
        </art-row>
      </column>

      <column title="图标颜色">
        <art-row :gutter="10">
          <art-col :span="6">
            <art-icon name="round_close" size="middle" color="#ed3f14" />  
            <span class="art-example-icon__name">round_close</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="round_check" size="middle" color="#19be6b" />  
            <span class="art-example-icon__name">round_check</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="loading" size="middle" color="#2d8cf0" />  
            <span class="art-example-icon__name">loading</span>
          </art-col>
          <art-col :span="6">
            <art-icon name="close" size="middle" color="#ff9900" />  
            <span class="art-example-icon__name">close</span>
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
      font-size: $font-size-small;
    }
    .art-col {
      display: flex;
      height: 70px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $color-neutral-light;
      border-radius: $border-radius;
      background-clip: content-box;
    }
  }
</style>