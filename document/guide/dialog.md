---
title: Dialog 对话框
---

# Dialog 对话框
----

## 对话框类型
对话框主要分两种：`确认对话框`、`消息对话框`

```html
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
```

## 多按钮对话框
多按钮对话框主要通过重写footer slot实现

```html
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
```

## 全局方法调用
支持 `$Dialog.confirm` 、 `$Dialog.alert` 

```javascript
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

this.$Dialog.alert({
  title: '警告',
  content: '今天有雷阵雨，记得带伞',
  confirmText: '知道了',
  callback: (action) => {
    this.$Toast(action)
  }
})
```

## Dialog 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 对话框的显示状态，建议使用v-model双向绑定 | Boolean | `true`, `false` | `false` |
| type | 对话框的类型 | String | `confirm`, `alert` | `confirm` |
| confirmText | 确认按钮文本 | String | - | `确定` |
| cancelText | 取消按钮文本 | String | - | `取消` |
| title | 对话框标题 | String | - | - |
| content | 对话框内容 | String | - | - |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true`, `false` | `true` |

## Dialog 事件
| 名称      | 说明          | 
|---------- |-------------- |
| on-confirm | 点击确定按钮触发 |
| on-cancel | 点击取消按钮触发 |

## Dialog 插槽
| 名称      | 说明          | 
|---------- |-------------- |
| 无 | 对话框内容 |
| footer | 对话框 |

## Dialog 全局方法
可以通过以下方式直接调用对话框：(支持primise回调))
- this.$Dialog.confirm(configObj)
- this.$Dialog.alert(configObj)

具体配置项如下：
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| confirmText | 确认按钮文本 | String | - | `确定` |
| cancelText | 取消按钮文本 | String | - | `取消` |
| title | 对话框标题 | String | - | - |
| content | 对话框内容 | String | - | - |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true`, `false` | `true` |
| callback | 回调，参数为动作类型（confirm、cancel） | String | - | - |