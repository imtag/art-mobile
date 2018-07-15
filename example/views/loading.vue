<template>
  <page>
     <column title="基本使用">
      <art-loading></art-loading>
     </column>

     <column title="指定尺寸">
      <art-loading :size="20"></art-loading>
      <art-loading :size="40"></art-loading>
      <art-loading :size="60"></art-loading>
     </column>

     <column title="居中">
      <art-loading :size="44" align="center"></art-loading>
     </column>
  </page>
</template>