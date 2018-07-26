<template>
  <page>
    <column>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast('hello world')">Info</art-button>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast.loading({'message': '加载中', 'duration': '5000'})">Loading</art-button>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast.success('加载成功')">Success</art-button>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast.fail('加载失败')">Fail</art-button>
    </column>
  </page>
</template>
