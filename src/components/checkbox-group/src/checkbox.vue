<template>
  <div class="art-checkbox">
    <label class="art-checkbox__wrap">
      <span class="art-checkbox__input">
        <span class="art-checkbox__inner" />
        <input
          class="art-checkbox__origin"
          type="checkbox"
          :value="id" />
      </span>
      <div class="art-checkbox__content">
        <slot>{{ label }}</slot>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ArtCheckbox',
    props: {
      id: {
        type: [String, Number],
        required: true
      },
      label: [String, Number]
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-checkbox {
    box-sizing: border-box;
    padding: 0 16px;
    font-size: 14px;
    color: $color-neutral-content;
    &__wrap {
      display: flex;
      align-items: center;
      height: 40px;
    }
    &__input {
      position: relative;
      margin-right: 5px;
    }
    &__inner {
      position: relative;
      display: inline-block;
      width: 16PX;
      height: 16PX;
      vertical-align: middle;
      border-radius: 50%;
      background-color: $color-primary;
      &:after {
        content: "";
        position: absolute;
        top: 3PX;
        left: 6PX;
        width: 3PX;
        height: 6PX;
        border: 1PX solid #fff;
        border-left: 0;
        border-top: 0;
        transform: rotate(45deg) scale(1.4);
      }
    }
    &__origin {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
    }
    &__content {
      flex: 1;
      line-height: 22px;
    }
    &:not(:last-child) {
      .art-checkbox__wrap {
        @include border-bottom-1px;
      }
    }
  }
</style>
