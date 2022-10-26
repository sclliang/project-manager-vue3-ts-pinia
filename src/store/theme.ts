import { defineStore } from 'pinia'
import Storage from '@/utils/CachaStorage'
const ThemeStore = defineStore('themeStore', {
  state: () => ({
    mainColor: Storage.getItem('theme') || '#409eff'
  }),
  actions: {
    changeTheme(color: string) {
      this.mainColor = color
      Storage.setItem('theme', color)
    }
  }
})
export default ThemeStore
