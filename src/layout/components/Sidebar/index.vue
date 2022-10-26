<template>
  <div>
    <div class="sidebar-header">
      <el-avatar
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      ></el-avatar>
      <h1 class="logo-title" v-if="appStore.sidebarOpened">sclliang</h1>
    </div>
    <el-scrollbar><sidebar-menu></sidebar-menu></el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import SidebarMenu from './SidebarMenu.vue'
import AppStore from '@/store/app'
const appStore = AppStore()
</script>
<style lang="scss" scoped>
.sidebar-header {
  height: 44px;
  padding: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
  }
}
</style>
