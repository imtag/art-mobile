<template>
  <page>
    <art-dialog
      v-model="visible1"
      title="删除文件"
      @on-confirm="visible1 = false">
      <div>确定要删除吗？</div>
    </art-dialog>

    <art-dialog
      v-model="visible2"
      title="关于JavaScript"
      type="alert"
      confirmText="知道了"
      @on-confirm="visible2 = false">
      <div>JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。</div>
    </art-dialog>

    <art-dialog
      v-model="visible3"
      title="去支付"
      @on-confirm="visible3 = false">
      <div>请选择支付方式</div>
      <template slot="footer">
        <art-button type="link" size="large" @click.native="visible3 = false">支付宝</art-button>
        <art-button type="link" size="large" @click.native="visible3 = false">微信</art-button>
        <art-button type="link" size="large" @click.native="visible3 = false">银联</art-button>
      </template>
    </art-dialog>

    <column title="组件调用">
      <art-button type="primary" @click.native="visible1 = true">Confirm</art-button>
      <space />
      <art-button type="primary" @click.native="visible2 = true">Alert</art-button>
      <space />
      <art-button type="primary" @click.native="visible3 = true">Multiple Buttons</art-button>
    </column>

    <column title="脚本调用">
      <art-button type="primary" @click.native="btnClick1">Confirm</art-button>
      <space />
      <art-button type="primary" @click.native="btnClick2">Alert</art-button>
    </column>
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
    },
    methods: {
      btnClick1 () {
        this.$Dialog.confirm({
          title: '妹子',
          content: '你愿意嫁给一个程序员吗？',
          showClose: false,
          confirmText: '愿意',
          cancelText: '不愿意'
        }).then(action => {
          this.$Toast('愿意')
        }).catch(action => {
          this.$Toast('不愿意')
        })
      },
      btnClick2 () {
        this.$Dialog.alert({
          title: '警告',
          content: '今天有雷阵雨，记得带伞',
          confirmText: '知道了',
          callback: (action) => {
            this.$Toast(action)
          }
        })
      }
    }
  }
</script>