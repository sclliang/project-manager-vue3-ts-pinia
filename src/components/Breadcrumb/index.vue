<!-- 动态面包屑 -->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in BreadcrumData"
        :key="item.path"
        :to="item.path"
      >
        <span class="no-redirect" v-if="index === BreadcrumData.length - 1">{{
          item.meta.title
        }}</span>
        <span v-else>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { watch, ref } from 'vue'
import { RouteLocationMatched, useRoute } from 'vue-router'
const route = useRoute()
const BreadcrumData = ref<RouteLocationMatched[]>([])

// 获取当前路由的完整路由表，包括上级路由
const getBreadcrumData = () => {
  BreadcrumData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

watch(route, getBreadcrumData, { immediate: true })
</script>
<style lang="scss" scoped>
.breadcrumb {
  font-size: 14px;
  margin-left: 8px;
  line-height: 50px;
  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }
}
</style>
