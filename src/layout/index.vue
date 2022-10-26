<template>
  <div
    class="app-wrapper"
    :class="[appStore.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <Sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <Navbar></Navbar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import variables from '@/styles/variables.module.scss'
import AppStore from '@/store/app'
const appStore = AppStore()
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
