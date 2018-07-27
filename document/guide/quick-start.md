---
title: 快速上手
---

# 快速上手
----

## 全局引入
在入口文件中如下配置：

```javascript
  import ArtMobile from 'art-mobile'
  import 'art-mobile/lib/art-mobile.css'

  Vue.use(ArtMobile)
```

## 按需引入
借助插件 babel-plugin-import可以实现按需加载组件，减少文件体积。首先安装，并在文件 .babelrc 中配置：

```javascript
{
  "plugins": [
    "transform-runtime",
    [
      "import",
      {
        "libraryName": "art-mobile",
        "libraryDirectory": "lib",
        "style": true
      }
    ]
  ]
}
```

同时需要在入口文件引入默认样式
```javascript
import 'art-mobile/lib/style/style.css'
```

这样你就可以按需引入组件了，有效减小包的体积
```javascript
import { Dialog } from 'art-mobile'
Vue.use(Dialog)
```

## 脚本引入
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/art-mobile@1.0.31/lib/art-mobile.css"></link>
<script type="text/javascript" src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/art-mobile@1.0.31/lib/art-mobile.js"></script>

<body>
  <div id="app">
    <art-button type="primary" >Primary</art-button>
  </div>
</body>

<script> 
  new Vue({
    el: '#app'
  }
</script>
```