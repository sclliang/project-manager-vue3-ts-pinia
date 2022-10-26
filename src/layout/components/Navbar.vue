<template>
  <div class="navbar">
    <div class="left">
      <div class="hamburger-container" @click="toggleClick">
        <svg-icon :icon="icon"></svg-icon>
      </div>
      <div class="title"><Breadcrunb></Breadcrunb></div>
    </div>
    <div class="right-menu">
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
              ><el-dropdown-item>主页</el-dropdown-item></router-link
            >
            <a
              href="https://github.com/sclliang/project-manager-vue3-ts-pinia.git"
              target="_blank"
            >
              <el-dropdown-item>gitHub</el-dropdown-item></a
            >
            <el-dropdown-item divided @click="onHandleLogoutClock"
              >退出登录</el-dropdown-item
            ></el-dropdown-menu
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
