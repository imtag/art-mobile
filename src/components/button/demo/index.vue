<template>
  <page>
    <div @click="buttonClick">
      <column title="按钮类型">
        <art-button>Default</art-button>
        <space />
        <art-button type="primary">Primary</art-button>
        <space />
        <art-button type="danger">Danger</art-button>
        <space />
        <art-button type="link">Link</art-button>
      </column>

      <column title="按钮尺寸">
        <art-button size="small">Small</art-button>
        <space />
        <art-button type="primary">Normal</art-button>
        <space />
        <art-button type="danger" size="large">Large</art-button>
      </column>

      <column title="行内按钮">
        <art-button inline size="small">Small</art-button>
        <art-button inline type="primary">Normal</art-button>
        <art-button inline type="danger" size="large">Large</art-button>
      </column>

      <column title="幽灵按钮">
        <art-button size="small" plain>Disabled</art-button>
        <space />
        <art-button type="primary" plain>Disabled</art-button>
        <space />
        <art-button type="danger" size="large" plain>Disabled</art-button>
      </column>

      <column title="按钮禁用">
        <art-button size="small" disabled>Disabled</art-button>
        <space />
        <art-button type="primary" disabled>Disabled</art-button>
        <space />
        <art-button type="danger" size="large" disabled>Disabled</art-button>
      </column>
    </div>
  </page>
</template>

<script>
  export default {
    methods: {
      buttonClick (e) {
        if (e.target.tagName.toUpperCase() === 'BUTTON') {
          alert('button click')
        }
      }
    }
  }
</script>