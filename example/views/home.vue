<template>
  <div class="art-home">
    <template v-if="isHome">
      v1.13
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
          <column :title="route.meta.title" />
          <ul class="art-home-route__list">
            <router-link 
              v-for="(routeItem, index) in route.children" :key="index"
              :to="routeItem.path"
              tag="li"
              class="art-home-route__item">
              <p class="art-home-route__item-title">
                {{ routeItem.meta.title }}
                <art-icon name="enter" />
              </p>
            </router-link>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
  import routes from '../router/routes.js'
  export default {
    computed: {
      isHome () {
        return this.$route.path === '/home'
      }
    },
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
    &-logo {
      padding: 50px 0 30px;
      text-align: center;
      &__title {
        font-size: 32px;
        font-weight: 500;
        color: $color-neutral-title;
      }
      &__desc {
        color: $color-neutral-sub;
      }
    }
    &-route {
      padding: 0 12px 18px;
      &__list {
        padding-left: 15px;
        color: $color-neutral-title;
        background-color: $color-neutral-light;
        border-radius: $border-radius;
      }
      &__item {
        &-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 44px;
          padding-right: 10px;
        }
        &:not(:last-child) {
          .art-home-route__item-title {
            @include border-1px;
          }
        }
      }
    }
  }
</style>
