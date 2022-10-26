import { defineStore } from 'pinia'
import { getUserInfo, login } from '@/api/sys'
import Storage from '@/utils/CachaStorage'
import md5 from 'md5'
import type { IUserInfo } from '@/types/login'
import type { IUserInfoData } from '@/api/type'
import router from '@/router'
const UserStore = defineStore('userStore', {
  state: () => ({
    token: Storage.getItem('token') || '',
    userInfo: (Storage.getItem('userInfo') as IUserInfoData) || {}
  }),
  actions: {
    // 登录
    async login(userinfo: IUserInfo) {
      const { username, password } = userinfo
      const res = await login({ username, password: md5(password) })
      this.token = res.token
      Storage.setItem('token', res.token)
      router.push('/')
    },
    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfo()
      Storage.setItem('userInfo', res)
      this.userInfo = res
    },
    // 退出登录
    logout() {
      this.token = ''
      this.userInfo = {}
      Storage.clear()
      router.push('/login')
    }
  }
})
export default UserStore
