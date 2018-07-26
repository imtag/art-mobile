<template>
  <div class="art-swiper">
    <ul class="art-swiper__list" ref="swiperListEl">
      <slot />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ArtSwiper',
    data () {
      return {
        translateX: 0
      }
    },
    created () {
      this.startX = 0
      this.index = 0
      this.lis = 0
      this.rootWidth = 0
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        const swiperEl = this.list = this.$el
        const swiperListEl = this.$refs.swiperListEl

        this.lis = swiperListEl.children.length
        this.rootWidth = document.documentElement.clientWidth

        swiperListEl.style.width = this.lis * this.rootWidth + 'px'
        const swiperHeight = swiperListEl.children[0].clientHeight
        swiperListEl.style.height = swiperEl.style.height = swiperHeight + 'px'

        Array.from(swiperListEl.children).forEach((item, index) => {
          item.style.width = this.rootWidth + 'px'
          item.style.left = this.rootWidth * index + 'px'
        })

        swiperEl.addEventListener('touchstart', this.touchStart)
        swiperEl.addEventListener('touchmove', this.touchMove)
        swiperEl.addEventListener('touchend', this.touchEnd)
      },
      touchStart (ev) {
        ev.preventDefault()
        this.startX = ev.changedTouches[0].clientX
      },
      touchMove (ev) {
        // 滑动差值
        var dis = ev.changedTouches[0].clientX - this.startX

        const index = Math.abs(this.index)
        if ((index === 0 && dis > 0) || (index === this.lis - 1 && dis < 0)) {
          return
        }

        // 当前list总平移长度
        this.translateX = this.rootWidth * this.index + dis
        this.$refs.swiperListEl.style.transform = `translate3d(${this.translateX}px, 0, 0)`
      },
      touchEnd (ev) {
        // 根据滑动长度求索引
        this.index = Math.round(this.translateX / this.rootWidth)

        this.translateX = this.rootWidth * this.index
        this.$refs.swiperListEl.style.transform = `translate3d(${this.translateX}px, 0, 0)`
      }
    }
  }
</script>

<style lang="scss">
  .art-swiper {
    overflow: hidden;
    &__list {
      position: relative;
      box-sizing: border-box;
    }
  }
  .art-swiper-item {
    position: absolute;
    top: 0px;
    box-sizing: border-box;
    text-align: center;
    background-color: #999;
    &:first-child {
      background-color: #bfa;
    }
    &:last-child {
      background-color: #fcc;
    }
  }
</style>
