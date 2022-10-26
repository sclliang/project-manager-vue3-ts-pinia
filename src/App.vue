<template>
  <el-config-provider :locale="locale" />
  <router-view />
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import AppStore from './store/app'
import { computed } from 'vue'
const store = AppStore()
const locale = computed(() => {
  return store.language === 'zh' ? zhCn : en
})
</script>

<style lang="scss"></style>
