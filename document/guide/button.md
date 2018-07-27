---
title: Button 按钮
---

# Button 按钮
----

## 按钮类型
按钮主要分四种：`默认按钮（白色背景）`、`主按钮（实心）` 、 `危险按钮（红色实心）` 、`链接按钮`

```html
<art-button>Default</art-button>
<art-button type="primary">Primary</art-button>
<art-button type="danger">Danger</art-button>
<art-button type="link">Link</art-button>
```

## 不可用状态按钮
添加属性 `disabled` 禁用按钮

```html
<at-button type="primary" disabled>Primary</at-button>
<at-button type="danger" disabled>Danger</at-button>
<at-button type="linnk" disabled>Link</at-button>
```

## 按钮尺寸
添加属性`size` 设置按钮尺寸大小

```html
<art-button size="small">Small</art-button>
<art-button>Normal</art-button>
<art-button size="large">Large</art-button>
```

## 行内按钮
添加属性`inline`

```html
<art-button inline size="small">Small</art-button>
<art-button inline type="primary">Normal</art-button>
<art-button inline type="danger" size="large">Large</art-button>
```

## 幽灵按钮
添加属性 `plain` 

```html
<art-button size="small" plain>Plain</art-button>
<art-button type="primary" plain>Plain</art-button>
<art-button type="danger" size="large" plain>Plain</art-button>
```

## Button 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮的类型 | String | `default`, `primary`, `danger`, `link` | `default` |
| size | 按钮的大小 | String | `small`, `normal`, `large` | `normal` |
| inline | 设置按钮为行内按钮 | Boolean | `true`, `false` | false |
| plain | 设置按钮为幽灵按钮 | Boolean | `true`, `false` | false |
| disabled | 设置按钮禁用 | Boolean | `true`, `false` | false |

## Button 插槽
| 名称      | 说明          | 
|---------- |-------------- |
| 无 | 按钮文本 |