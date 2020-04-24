<template>
  <div>
    <!-- 顶部 Header 区域 -->
    <header-nav></header-nav>
    <router-view></router-view>
    <!-- 中间 路由 router-view 区域 -->

    <!-- 底部 Tabbar 区域 -->
  </div>
</template>
<script>
import headerNav from './components/header-nav.vue';
export default {
  name: 'app',
  components: {
    headerNav
  },
}
</script>

<style>
</style>

