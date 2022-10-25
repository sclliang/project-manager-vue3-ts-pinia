import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import Storage from '@/utils/CachaStorage'
import md5 from 'md5'
import type { IUserInfo } from '@/types/login'
import router from '@/router'
const UserStore = defineStore('userStore', {
  state: () => ({
    token: Storage.getItem('token') || ''
  }),
  actions: {
    async login(userinfo: IUserInfo) {
      const { username, password } = userinfo
      const res = await login({ username, password: md5(password) })
      this.token = res.token
      Storage.setItem('token', res.token)
      router.push('/')
    }
  }
})
export default UserStore
