<template>
  <div class="header-search" :class="{ show: isShow }">
    <span @click.stop="onShowClick">
      <svg-icon class-name="search-icon" icon="search"></svg-icon>
    </span>
    <el-select
      default-first-option
      filterable
      remote
      :remote-method="querySearch"
      class="header-search-select"
      ref="headerSearchSelectRef"
      v-model="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item?.path"
        :label="option.item?.title.join('>')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { generateRoutes } from './FuseData'
import Fuse from 'fuse.js'
import { filterRouters } from '@/utils/route'
import { useRouter } from 'vue-router'
import { watchSwitchLang } from '@/utils/i18n'
import { ElSelect } from 'element-plus'

// 控制 search 显示
const isShow = ref(false)
// el-select 实例
const headerSearchSelectRef = ref<InstanceType<typeof ElSelect>>()
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value?.focus()
}

// search 相关
const search = ref('')
// 搜索结果
const searchOptions = ref<any[]>([])

// 选中回调
const onSelectChange = (val: any) => {
  router.push(val.path)
  onClose()
}

// 检索数据源
const router = useRouter()
let searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateRoutes(filterRoutes)
})
/**
 * 搜索库相关
 */
let fuse: any
const initFuse = (searchPool: any) => {
  fuse = new Fuse(searchPool, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
    threshold: 0.4,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
initFuse(searchPool.value)
// 搜索方法
const querySearch = (query: string) => {
  if (!query) return
  if (query.trim() !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
/**
 * 关闭 search 的处理事件
 */
const onClose = () => {
  search.value = ''
  headerSearchSelectRef.value?.blur()
  isShow.value = false
  searchOptions.value = []
}
/**
 * 监听 search 打开，处理 close 事件
 */
watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})

// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateRoutes(filterRoutes)
  })
  initFuse(searchPool.value)
})
</script>
<style lang="scss" scoped>
.header-search {
  font-size: 0;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    --el-input-focus-border: #fff !important;
    :deep(.el-input__wrapper) {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }

    :deep(.el-input__wrapper.is-focus) {
      box-shadow: none !important;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
      :deep(.el-input__wrapper) {
        border-radius: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        box-shadow: none !important;
        border-bottom: 1px solid #d9d9d9;
        vertical-align: middle;
      }
      :deep(.el-input__wrapper.is-focus) {
        box-shadow: none !important;
      }
    }
  }
}
</style>
