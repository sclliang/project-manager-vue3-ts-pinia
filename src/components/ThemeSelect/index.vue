<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <span><svg-icon icon="change-theme"></svg-icon></span>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">{{
          $t('msg.theme.themeColorChange')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div>
    <SelectColor v-model="selectColorVisible"></SelectColor>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SelectColor from './SelectColor.vue'
const handleSetTheme = () => {
  selectColorVisible.value = true
}
const selectColorVisible = ref(false)
</script>
<style lang="scss" scoped></style>
