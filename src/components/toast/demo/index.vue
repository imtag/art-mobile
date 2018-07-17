<template>
  <page>
    <div>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast('hello world')">Info</art-button>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast.loading({'message': '加载中', 'duration': '20000'})">Loading</art-button>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast.success({'message': '加载成功', 'duration': '1000'})">Success</art-button>
      <space />
      <art-button type="primary" size="large" @click.native="$Toast.fail('加载失败')">Fail</art-button>
    </div>
  </page>
</template>
