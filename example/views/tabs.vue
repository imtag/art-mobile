<template>
  <page>
    <div class="art-example-tabs">
      <column title="基本使用">
        <div class="tabs-basic art-example-background">
          <art-tabs v-model="active">
            <art-tab
              v-for="(item, index) in items" 
              :key="index" 
              :id="item.id">
              {{ item.label }}
            </art-tab>
          </art-tabs>
          <art-tab-panels v-model="active"> 
            <art-tab-panel 
              v-for="(item, index) in items"
              :key="index"
              :id="item.id">
              <div class="tab-panel-content">
                active - {{ active }}
              </div>
            </art-tab-panel>
          </art-tab-panels>
        </div>
      </column>
    </div>
  </page>
</template>

<script>
  export default {
    data () {
      return {
        active: ''
      }
    },
    created () {
      this.items = [
        {
          id: 'news',
          label: '新闻'
        },
        {
          id: 'movie',
          label: '电影'
        },
        {
          id: 'music',
          label: '音乐'
        },
        {
          id: 'shop',
          label: '购物'
        }
      ]
      this.active = this.items[0].id
    }
  }
</script>

<style lang="scss">
  .art-example-tabs {
    .tabs-basic {
      .tab-panel-content {
        padding: 20px;
        text-align: center;
      }
    }
  }
</style>
