<template>
  <page>
    <div class="art-example-layout">
      <column title="基本用法">
        <div class="art-example-background">
          <art-radios v-model="active">
            <art-radio v-for="(item, index) in items" :key="index" :id="item.id" :label="item.label" />
          </art-radios>
        </div>
      </column>

      <column title="图标位置">
        <div class="art-example-background">
          <art-radios v-model="active" position="right">
            <art-radio v-for="(item, index) in items" :key="index" :id="item.id" :label="item.label" />
          </art-radios>
        </div>
      </column>

      <column title="使用插槽">
        <div class="art-example-background">
          <art-radios v-model="active1">
            <art-radio v-for="(item, index) in items1" :key="index" :id="item.id">
              <img :src="item.img" alt="" height="50px" />
            </art-radio>
          </art-radios>
        </div>
      </column>
      
      <column title="禁用单选">
        <div class="art-example-background">
          <art-radios v-model="active2">
            <art-radio v-for="(item, index) in items2" :key="index" :id="item.id" :label="item.label" :disabled="item.disabled" />
          </art-radios>
        </div>
      </column>
    </div>
  </page>
</template>

<script>
  export default {
    data () {
      return {
        active: '',
        active1: '',
        active2: ''
      }
    },
    created () {
      this.items = [
        {
          id: 'news',
          label: '新闻'
        },
        {
          id: 'movie',
          label: '电影'
        },
        {
          id: 'music',
          label: '音乐'
        }
      ]
      this.active = this.items[0].id
      this.items1 = [
        {
          id: 'news',
          label: '新闻',
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3345551635,2733547151&fm=27&gp=0.jpg'
        },
        {
          id: 'movie',
          label: '电影',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2358260907,1335960657&fm=27&gp=0.jpg'
        },
        {
          id: 'music',
          label: '音乐',
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1191558006,3906372379&fm=27&gp=0.jpg'
        }
      ]
      this.active1 = this.items1[0].id
      this.items2 = [
        {
          id: 'news',
          label: '新闻',
          disabled: false
        },
        {
          id: 'movie',
          label: '电影',
          disabled: false
        },
        {
          id: 'music',
          label: '音乐',
          disabled: true
        }
      ]
      this.active2 = this.items2[0].id
    }
  }
</script>