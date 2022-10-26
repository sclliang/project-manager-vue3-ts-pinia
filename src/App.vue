<template>
  <el-config-provider :locale="locale" />
  <router-view />
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import AppStore from './store/app'
import ThemeStore from './store/theme'
import { computed } from 'vue'
import { writeNewStyle, generateNewStyle } from './utils/theme'
const store = AppStore()
const themeStore = ThemeStore()
generateNewStyle(themeStore.mainColor).then((newStyle) => {
  writeNewStyle(newStyle)
})
const locale = computed(() => {
  return store.language === 'zh' ? zhCn : en
})
</script>

<style lang="scss"></style>
