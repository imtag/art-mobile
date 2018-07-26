<template>
  <page>
    <div class="art-example-layout">
      <column title="基本用法">
        <div class="art-example-background">
          <art-input v-model="value1" placeholder="请输入" @change="handleChange"></art-input>
        </div>
      </column>
    </div>
  </page>
</template>

<script>
  export default {
    data () {
      return {
        value1: ''
      }
    },
    methods: {
      handleChange (e) {
        console.log(this.value1)
      }
    }
  }
</script>