<template>
  <div>
    <el-menu
      :unique-opened="true"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      router
      :default-active="defaultRoute"
      :collapse="!store.sidebarOpened"
    >
      <sidebar-item
        v-for="item in routes"
        :key="item.path"
        :route="item"
      ></sidebar-item>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import variables from '@/styles/variables.module.scss'
import SidebarItem from './SidebarItem.vue'
import AppStore from '@/store/app'
const store = AppStore()
const router = useRouter()
const routes = computed(() => {
  const filterRouter = filterRouters(router.getRoutes())
  return generateMenus(filterRouter)
})
const route = useRoute()
const defaultRoute = computed(() => {
  const { path } = route
  return path
})
</script>
<style lang="scss" scoped></style>
