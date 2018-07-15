<template>
  <div class="mint-loadmore">
    <div class="mint-loadmore-content" :class="{ 'is-dropped': topDropped || bottomDropped}" :style="{ 'transform': transform }">
      <slot name="top">
        <div class="mint-loadmore-top" v-if="topMethod">
          <template v-if="topStatus === 'pull'">
            <svg class="mint-loadmore-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              width="15" height="15" viewBox="0 0 1024 1024">
              <path d="M469.333 128l85.333 0 0 512-85.333 0 0-512z" fill="#80848f"></path>
              <path d="M725.333 640l-426.667 0 213.333 256z" fill="#80848f"></path>
            </svg>
          </template>
          <template v-if="topStatus === 'drop'">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              width="15" height="15" viewBox="0 0 1024 1024">
              <path d="M512 128l-213.333 256 170.667 0 0 512 85.333 0 0-512 170.667 0z" fill="#80848f"></path>
            </svg>
          </template>
          <template v-if="topStatus === 'loading'">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="15px" height="15px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
              <path opacity="0.4" fill="#80848f" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
              <path fill="#80848f" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.5s"
                  repeatCount="indefinite"/>
              </path>
            </svg>
          </template>
          <span class="mint-loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot />
      <!-- <slot name="bottom">
        <div class="mint-loadmore-bottom" v-if="bottomMethod">
          <span v-if="bottomStatus === 'loading'" class="mint-loadmore-spinner" :size="20" type="fading-circle">icon</span>
          <span class="mint-loadmore-text">{{ bottomText }}</span>
        </div>
      </slot> -->
    </div>
  </div>
</template>

<style lang="scss">
  .mint-loadmore {
    overflow: hidden;
    .mint-loadmore-content {
      &.is-dropped {
        transition: .2s;
      }
    }
    .mint-loadmore-top, .mint-loadmore-bottom {
      text-align: center;
      height: 50px;
    }
    .mint-loadmore-top {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -50px;
      font-size: 12px;
      color: #80848f;
    }
    .mint-loadmore-bottom {
      margin-bottom: -50px;
    }
    .mint-loadmore-icon {
      display: inline-block;
      vertical-align: middle;
    }
    .mint-loadmore-text {
      margin-left: 5px;
      vertical-align: middle;
    }
  }
</style>

<script>
  export default {
    name: 'ArtPullDown',
    props: {
      maxDistance: {
        type: Number,
        default: 0
      },
      autoFill: {
        type: Boolean,
        default: true
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放刷新'
      },
      topLoadingText: {
        type: String,
        default: '加载中'
      },
      topDistance: {
        type: Number,
        default: 50
      },
      topMethod: {
        type: Function
      },
      bottomPullText: {
        type: String,
        default: '上拉刷新'
      },
      bottomDropText: {
        type: String,
        default: '释放刷新'
      },
      bottomLoadingText: {
        type: String,
        default: '加载中'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: '',
        bottomStatus: ''
      }
    },
    computed: {
      transform () {
        return this.translate === 0 ? null : 'translate3d(0, ' + this.translate + 'px, 0)'
      }
    },
    watch: {
      topStatus (val) {
        this.$emit('top-status-change', val)
        switch (val) {
          case 'pull':
            this.topText = this.topPullText
            break
          case 'drop':
            this.topText = this.topDropText
            break
          case 'loading':
            this.topText = this.topLoadingText
            break
        }
      },
      bottomStatus (val) {
        this.$emit('bottom-status-change', val)
        switch (val) {
          case 'pull':
            this.bottomText = this.bottomPullText
            break
          case 'drop':
            this.bottomText = this.bottomDropText
            break
          case 'loading':
            this.bottomText = this.bottomLoadingText
            break
        }
      }
    },
    methods: {
      onTopLoaded () {
        this.translate = 0
        setTimeout(() => {
          this.topStatus = 'pull'
        }, 200)
      },
      onBottomLoaded () {
        this.bottomStatus = 'pull'
        this.bottomDropped = false
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            document.body.scrollTop += 50
          } else {
            this.scrollEventTarget.scrollTop += 50
          }
          this.translate = 0
        })
        if (!this.bottomAllLoaded && !this.containerFilled) {
          this.fillContainer()
        }
      },
      getScrollEventTarget (element) {
        let currentNode = element
        while (currentNode && currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
          }
          currentNode = currentNode.parentNode
        }
        return window
      },
      getScrollTop (element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop
        }
      },
      bindTouchEvents () {
        this.$el.addEventListener('touchstart', this.handleTouchStart)
        this.$el.addEventListener('touchmove', this.handleTouchMove)
        this.$el.addEventListener('touchend', this.handleTouchEnd)
      },
      init () {
        this.topStatus = 'pull'
        this.bottomStatus = 'pull'
        this.topText = this.topPullText
        this.scrollEventTarget = this.getScrollEventTarget(this.$el)
        if (typeof this.bottomMethod === 'function') {
          this.fillContainer()
          this.bindTouchEvents()
        }
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents()
        }
      },
      fillContainer () {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                document.documentElement.getBoundingClientRect().bottom
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                this.scrollEventTarget.getBoundingClientRect().bottom
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading'
              this.bottomMethod()
            }
          })
        }
      },
      checkBottomReached () {
        if (this.scrollEventTarget === window) {
          /**
           * fix:scrollTop===0
           */
          return document.documentElement.scrollTop || document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight
        } else {
          return parseInt(this.$el.getBoundingClientRect().bottom) <= parseInt(this.scrollEventTarget.getBoundingClientRect().bottom) + 1
        }
      },
      handleTouchStart (event) {
        this.startY = event.touches[0].clientY
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget)
        this.bottomReached = false
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull'
          this.topDropped = false
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull'
          this.bottomDropped = false
        }
      },
      handleTouchMove (event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return
        }
        this.currentY = event.touches[0].clientY
        let distance = (this.currentY - this.startY) / this.distanceIndex
        this.direction = distance > 0 ? 'down' : 'up'
        if (typeof this.topMethod === 'function' && this.direction === 'down' &&
          this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault()
          event.stopPropagation()
          if (this.maxDistance > 0) {
            this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate
          } else {
            this.translate = distance - this.startScrollTop
          }
          if (this.translate < 0) {
            this.translate = 0
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull'
        }
        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached()
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
          this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
          event.preventDefault()
          event.stopPropagation()
          if (this.maxDistance > 0) {
            this.translate = Math.abs(distance) <= this.maxDistance
              ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate
          } else {
            this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance
          }
          if (this.translate > 0) {
            this.translate = 0
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull'
        }
        this.$emit('translate-change', this.translate)
      },
      handleTouchEnd () {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true
          if (this.topStatus === 'drop') {
            this.translate = '50'
            this.topStatus = 'loading'
            this.topMethod()
          } else {
            this.translate = '0'
            this.topStatus = 'pull'
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true
          this.bottomReached = false
          if (this.bottomStatus === 'drop') {
            this.translate = '-50'
            this.bottomStatus = 'loading'
            this.bottomMethod()
          } else {
            this.translate = '0'
            this.bottomStatus = 'pull'
          }
        }
        this.$emit('translate-change', this.translate)
        this.direction = ''
      }
    },
    mounted () {
      this.init()
    }
  }
</script>