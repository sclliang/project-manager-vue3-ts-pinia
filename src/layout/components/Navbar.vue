<template>
  <div class="navbar">
    <div class="left">
      <div class="hamburger-container" @click="toggleClick">
        <svg-icon :icon="icon"></svg-icon>
      </div>
      <div class="title"><Breadcrunb></Breadcrunb></div>
    </div>
    <div class="right-menu">
      <div>
        <header-search class="right-menu-item hover-effect"></header-search>
      </div>
      <div>
        <screen-full class="right-menu-item hover-effect"></screen-full>
      </div>
      <div>
        <ThemeSelect class="right-menu-item hover-effect"></ThemeSelect>
      </div>
      <div>
        <lang-select class="right-menu-item hover-effect"></lang-select>
      </div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="store.userInfo.avatar"
          ></el-avatar>
          <el-icon><Setting /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/"
              ><el-dropdown-item>{{
                $t('msg.navBar.home')
              }}</el-dropdown-item></router-link
            >
            <a
              href="https://github.com/sclliang/project-manager-vue3-ts-pinia.git"
              target="_blank"
            >
              <el-dropdown-item>gitHub</el-dropdown-item></a
            >
            <el-dropdown-item divided @click="onHandleLogoutClock">{{
              $t('msg.navBar.logout')
            }}</el-dropdown-item></el-dropdown-menu
          >
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import UserStore from '@/store/user'
import AppStore from '@/store/app'
import { computed } from 'vue'
import Breadcrunb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import ThemeSelect from '@/components/ThemeSelect'
import ScreenFull from '@/components/ScreenFull'
import HeaderSearch from '@/components/HeaderSearch/index.vue'
const store = UserStore()
const appStore = AppStore()
/**
 * 退出登录
 */
const onHandleLogoutClock = () => {
  store.logout()
}

const icon = computed(() => {
  return appStore.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
const toggleClick = () => {
  appStore.triggerSidebarOpened()
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    height: 100%;
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    :deep(.avatar-container) {
      cursor: pointer;
      .el-avatar {
        margin-right: 12px;
      }
    }
    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
      }
    }
  }
  .left {
    float: left;
    line-height: 46px;
    height: 100%;
    cursor: pointer;
    transition: background 0.5s;
    display: flex;
    align-items: center;
    .hamburger-container {
      width: 50px;
      text-align: center;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .title {
      height: 100%;
      text-align: center;
      line-height: 50px;
      float: left;
    }
  }
}
</style>
