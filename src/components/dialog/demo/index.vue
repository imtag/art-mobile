<template>
  <page>
    <art-dialog
      v-model="visible1"
      title="删除文件"
      :showClose="false"
      @on-confirm="visible1 = false">
      <div style="text-align:center;">确定要删除吗？</div>
    </art-dialog>

    <art-dialog
      v-model="visible2"
      title="关于JavaScript"
      type="alert"
      @on-confirm="visible2 = false">
      <div>JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。</div>
    </art-dialog>

    <art-dialog
      v-model="visible3"
      title="去支付"
      @on-confirm="visible3 = false">
      <div style="text-align:center;">请选择支付方式</div>
      <template slot="footer">
        <art-button type="link" size="large" @click.native="visible3 = false">支付宝</art-button>
        <art-button type="link" size="large" @click.native="visible3 = false">微信</art-button>
        <art-button type="link" size="large" @click.native="visible3 = false">银联</art-button>
      </template>
    </art-dialog>

    <space />
    <art-button type="primary" @click.native="visible1 = true">基本使用</art-button>
    <space />
    <art-button type="primary" @click.native="visible2 = true">Alert对话框</art-button>
    <space />
    <art-button type="primary" @click.native="visible3 = true">多个按钮</art-button>
  </page>
</template>
  
<script>
  export default {
    data () {
      return {
        visible1: false,
        visible2: false,
        visible3: false
      }
    }
  }
</script>