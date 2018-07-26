<template>
  <page>
    <column title="基本使用">
      <div class="art-example-background">
        <art-checkbox-group>
          <art-checkbox v-for="item in items" :key="item" :id="item" :label="item"></art-checkbox>
        </art-checkbox-group>
      </div>
    </column>
  </page>
</template>

<script>
  export default {
    data () {
      return {
        items: ['天气不错1', '天气不错2', '天气不错3']
      }
    }
  }
</script>
