<template>
  <div class="art-input">
    <input 
      class="art-input-box" 
      v-model="inputValue"
      :type="type"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :form="form"
      :min="min"
      :max="max"
      :step="step"
      :maxlength="maxlength"
      :minlength="minlength"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange" />
  </div>
</template>

<script>
  export default {
    name: 'ArtInput',
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text',
        validator (value) {
          return [
            'text',
            'number',
            'password',
            'date'
          ].indexOf(value) > -1
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      form: String,
      min: Number,
      max: Number,
      step: Number,
      maxlength: Number,
      minlength: Number
    },
    data () {
      return {
        inputValue: ''
      }
    },
    watch: {
      value (newVal) {
        this.inputValue = newVal
      },
      inputValue (newVal) {
        this.$emit('input', newVal)
      }
    },
    methods: {
      handleChange (e) {
        this.$emit('change', e)
      },
      handleFocus (e) {
        this.$emit('focus', e)
      },
      handleBlur (e) {
        this.$emit('blur', e)
      }
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  .art-input {
    display: flex;
    height: 36px;
    line-height: 36px;
    font-size: $font-size-normal;
    &-box {
      flex: 1;
      padding: 0 12px;
      &::placeholder {
        color: #CDCDCD;
      }
    }
  }
</style>
