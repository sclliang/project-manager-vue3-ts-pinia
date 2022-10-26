import { defineStore } from 'pinia'
import Storage from '@/utils/CachaStorage'
const AppStore = defineStore('appStore', {
  state: () => ({
    sidebarOpened: true,
    language: Storage.getItem('language') || 'zh'
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    },
    triggerLanguage(lang: string) {
      this.language = lang
      Storage.setItem('language', lang)
    }
  }
})
export default AppStore
