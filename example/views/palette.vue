<template>
  <div class="wrapper">
    <div class="preview">
      <!-- <button-demo></button-demo> -->
      <iframe id="iframe" width="375" height="667" src="#/basic/button"></iframe>
    </div>
    <div class="editor">
      <div 
        class="editor__item"
        v-for="(attr, key) in attrs"
        :key="key"
        style="margin-bottom:25PX;">
        <p style="margin-bottom:8PX;">
          <span>{{ key }}</span>
          <span style="font-size:14PX;margin-left:10PX;color:#888;">{{ attr.desc }}</span>
        </p>

        <el-color-picker 
          v-if="attr.type === 'color'"
          v-model="attr.value"
          size="medium"
          @active-change="colorChange(key, $event)"
          @change="colorChange(key, $event)">
        </el-color-picker>

        <el-input
          v-if="attr.type === 'size'"
          v-model="attr.value"
          size="mini"
          style="width:100px;"
          @input="sizeChange(key, $event)">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonDemo from 'src/components/button/demo'
  // import variables from '../../src/styles/themes/variable.js'

  export default {
    components: {
      ButtonDemo
    },

    data () {
      return {
        attrs: {
          'color-primary': {
            desc: '基础配置：品牌色',
            type: 'color',
            value: ''
          },
          'color-sub-error': {
            desc: '基础配置：危险色',
            type: 'color',
            value: ''
          },
          'border-radius': {
            desc: '基础配置：圆角大小',
            type: 'size',
            value: ''
          },
          'font-size-small': {
            desc: '基础配置：小字体大小',
            type: 'size',
            value: ''
          },
          'font-size-normal': {
            desc: '基础配置：普通字体大小',
            type: 'size',
            value: ''
          },
          'font-size-large': {
            desc: '基础配置：大字体大小',
            type: 'size',
            value: ''
          },
          'button-primary-fill': {
            desc: 'Button配置：主要按钮颜色，默认为基础品牌色color-primary',
            type: 'color',
            value: ''
          },
          'button-danger-fill': {
            desc: 'Button配置：危险按钮颜色，默认为基础危险色color-sub-error',
            type: 'color',
            value: ''
          },
          'button-small-height': {
            desc: 'Button配置：小型按钮高度，默认为24px',
            type: 'size',
            value: ''
          },
          'button-normal-height': {
            desc: 'Button配置：一般按钮高度，默认为34px',
            type: 'size',
            value: ''
          },
          'button-large-height': {
            desc: 'Button配置：大型按钮高度，默认为38px',
            type: 'size',
            value: ''
          },
          'button-radius': {
            desc: 'Button配置：按钮圆角大小，默认为基础圆角大小border-radius',
            type: 'size',
            value: ''
          },
          'button-normal-font-size': {
            desc: 'Button配置：普通按钮文字大小，默认为全局小字体大小font-size-normal',
            type: 'size',
            value: ''
          },
          'button-small-font-size': {
            desc: 'Button配置：小型按钮文字大小，默认为全局小字体大小font-size-small',
            type: 'size',
            value: ''
          },
          'button-large-font-size': {
            desc: 'Button配置：大型按钮文字大小，默认为全局大字体大小font-size-large',
            type: 'size',
            value: ''
          }
        }
      }
    },

    created () {
      const themeVariables = JSON.parse(localStorage.getItem('theme'))
      for (let key in themeVariables) {
        if (this.attrs[key]) {
          let value = themeVariables[key]
          const match = value.match(/-+(.+)\)/)
          if (match && match.length) {
            value = themeVariables[match[1]]
          }
          this.attrs[key]['value'] = value
        }
      }
    },

    methods: {
      colorChange (key, value) {
        const themeVariables = JSON.parse(localStorage.getItem('theme'))
        for (let variable in themeVariables) {
          if (key === variable) {
            themeVariables[key] = value
            document.body.style.setProperty(`--${key}`, value)
          }
        }
        localStorage.setItem('theme', JSON.stringify(themeVariables))
      },

      sizeChange (key, value) {
        const themeVariables = JSON.parse(localStorage.getItem('theme'))
        for (let variable in themeVariables) {
          if (key === variable) {
            themeVariables[key] = value
            document.body.style.setProperty(`--${key}`, value)
          }
        }
        localStorage.setItem('theme', JSON.stringify(themeVariables))
      }
    }
  }
</script>

<style lang='scss'>
  .wrapper {
    width: 1200PX;
    margin: 0 auto;
    padding: 30PX 0 30PX;
    display: flex;
  }
  .preview {
    position: fixed;
    width: 375PX;
    height: 667PX;
    border: 1PX solid #ddd;
    box-shadow: 0 0 15PX #ddd;
  }
  .editor {
    font-size: 18PX;
    padding-left: 480PX;
  }
</style>