import { defineStore } from 'pinia'
const AppStore = defineStore('appStore', {
  state: () => ({
    sidebarOpened: true
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    }
  }
})
export default AppStore
