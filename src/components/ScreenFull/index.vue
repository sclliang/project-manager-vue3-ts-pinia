<template>
  <div @click="onToggle">
    <svg-icon
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import screenfull from 'screenfull'
const isFullscreen = ref(false)
const onToggle = () => {
  screenfull.toggle()
}
const change = () => {
  isFullscreen.value = !isFullscreen.value
}
onMounted(() => {
  screenfull.on('change', change)
})
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>
<style lang="scss" scoped></style>
