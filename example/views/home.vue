<template>
  <div class="art-home">
    <div class="art-home-logo">
      <h1 class="art-home-logo__title">Art Mobile</h1>
      <p class="art-home-logo__desc">An elegant mobile UI lib from Vue.js</p>
    </div>
    <div class="art-home-route">
      <div 
        class="art-home-route__wrap"
        v-if="route.meta && route.meta.isCategory"
        v-for="(route, index) in routes"
        :key="index">
        <p class="art-home-route__title">{{ route.meta.title }}</p>
        <ul class="art-home-route__list">
          <router-link 
            v-for="(routeItem, index) in route.children" :key="index"
            :to="routeItem.path"
            tag="li"
            class="art-home-route__item">
            <div class="art-home-route__item-wrap">
              <div>
                <span style="vertical-align:middle;margin-right:10px;">{{ routeItem.meta.title }}</span>
                <art-tag v-if="!routeItem.meta.finish" type="danger" size="small" plain>待完成</art-tag>
              </div>
              <art-icon name="arrow-right" size="small" color="#80848f" />
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <p style="text-align:center;margin-bottom:15px;color:#666;">v1.18</p>
    <router-view />
  </div>
</template>

<script>
  import routes from '../router/routes.js'
  export default {
    created () {
      this.routes = routes
    }
  }
</script>

<style lang="scss">
  @import '~src/styles/themes/default.scss';
  @import '~src/styles/mixins/index.scss';
  .art-home {
    height: 100%;
    overflow: auto;
    &-logo {
      padding: 40px 0 25px;
      text-align: center;
      &__title {
        font-size: 32px;
        font-weight: 500;
        color: $color-neutral-title;
      }
      &__desc {
        margin-top: 8px;
        color: $color-neutral-sub;
      }
    }
    &-route {
      padding: 0 12px 18px;
      &__title {
        padding: 22px 2px 10px;
        font-size: $font-size-small;
        color: $color-neutral-sub;
      }
      &__list {
        padding: 0 15px;
        color: $color-neutral-title;
        background-color: $color-neutral-light;
        border-radius: $border-radius;
      }
      &__item {
        &-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 44px;
        }
        &:not(:last-child) {
          .art-home-route__item-wrap {
            @include border-bottom-1px;
          }
        }
      }
    }
  }
</style>
