import router from './router'
import UserStore from '@/store/user'
const whiteList = ['/login']

router.beforeEach((to) => {
  const store = UserStore()
  if (store.token) {
    if (to.path === '/login') {
      return '/'
    } else {
      if (!store.userInfo.username) {
        store.getUserInfo()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      return
    } else {
      return '/login'
    }
  }
})
