<template>
  <div class="art-input">
    <input 
      class="art-input-box" 
      v-model="value"
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
      :minlength="minlength" />
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
    }
  }
</script>

<style lang="scss">
  .art-input {
    display: flex;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    &-box {
      flex: 1;
      padding: 0 12px;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      &::placeholder {
        color: #CDCDCD;
      }
    }
  }
</style>
