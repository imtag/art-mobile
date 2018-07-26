<template>
  <page>
    <div class="car-manage">
      <div class="car-manage__search">
        <art-searchbar></art-searchbar>
      </div>

      <div class="car-manage__tabs">
        <art-tabs v-model="activeType">
          <art-tab 
            v-for="type in carTypes" 
            :key="type.id" 
            :id="type.id">
            {{ type.label }}
          </art-tab>
        </art-tabs>
      </div>

      <div class="car-manage__content">
        <art-tab-panels v-model="activeType"> 
          <art-tab-panel 
            v-for="type in carTypes" 
            :key="type.id" 
            :id="type.id">
            <ul class="car-manage__car-list">
              <li class="car-manage__car-item" v-for="item in 30" :key="item">
                {{ type.label }} - {{ item }}
              </li>
            </ul>
          </art-tab-panel>
        </art-tab-panels>
      </div>
    </div>
  </page>
</template>

<script>
  export default {
    data () {
      return {
        activeType: 'all'
      }
    },
    created () {
      this.carTypes = [
        {
          label: '全部',
          id: 'all'
        },
        {
          label: '库存',
          id: 'stock'
        },
        {
          label: '已售',
          id: 'sold'
        }
      ]
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .car-manage {
    &__tabs, &__search {
      background-color: #fff;
    }
    &__content {
      position: absolute;
      top: 84px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
    }
    &__car-item {
      height: 120px;
      line-height: 120px;
      background-color: #fff;
      border-radius: 3px;
      margin: 10px;
      text-align: center;
    }
  }
</style>