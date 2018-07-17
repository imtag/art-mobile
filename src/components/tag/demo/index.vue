<template>
  <page>
    <column title="标签类型">
      <art-tag>Default</art-tag>
      <art-tag type="primary">Primary</art-tag>
      <art-tag type="danger">Danger</art-tag>
    </column>

    <column title="标签形状">
      <art-tag>Default</art-tag>
      <art-tag type="primary" shape="fillet">Primary</art-tag>
      <art-tag type="danger" shape="circle">Danger</art-tag>
    </column>

    <column title="幽灵标签">
      <art-tag type="primary" plain>Normal</art-tag>
      <art-tag type="danger" plain>Large</art-tag>
    </column>

    <column title="标签大小">
      <art-tag size="small">Small</art-tag>
      <art-tag type="primary">Normal</art-tag>
      <art-tag type="danger" size="large">Large</art-tag>
    </column>
  </page>
</template>