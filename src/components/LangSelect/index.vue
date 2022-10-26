<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLangusge"
  >
    <div>
      <el-tooltip content="国际化" :effect="effects" placement="bottom"
        ><span><svg-icon icon="language"></svg-icon></span
      ></el-tooltip>
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="language === 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="language === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import AppStore from '@/store/app'
import { ElMessage } from 'element-plus'
import { computed, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
defineProps({
  effects: {
    type: String,
    default: 'dark',
    validator: (value: string) => {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})
const store = AppStore()
const language = computed(() => store.language)
const i18n = useI18n()
const handleSetLangusge = (lang: string) => {
  i18n.locale.value = lang
  store.triggerLanguage(lang)
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>
<style lang="scss" scoped></style>
