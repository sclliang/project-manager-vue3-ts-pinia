<template>
  <el-sub-menu :index="route.path" v-if="route.children.length > 0">
    <template #title>
      <svg-icon :icon="route.meta?.icon"></svg-icon>
      <span>{{ generatetitle(route.meta.title) }}</span>
    </template>
    <SidebarItem
      v-for="child in route.children"
      :key="child.path"
      :route="child"
    ></SidebarItem>
  </el-sub-menu>
  <el-menu-item :index="route.path" v-else>
    <svg-icon :icon="route.meta?.icon"></svg-icon>
    <span>{{ generatetitle(route.meta.title) }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { generatetitle } from '@/utils/i18n'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped></style>
