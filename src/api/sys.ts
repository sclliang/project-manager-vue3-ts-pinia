import HttpRequest from '@/utils/request'
import type { IUserInfo, IToken } from '@/types/login'
import type { IUserInfoData } from './type'
/**
 * 登录
 */
export const login = (data: IUserInfo) => {
  return HttpRequest.post<IToken>({
    url: '/sys/login',
    data
  })
}
/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return HttpRequest.get<IUserInfoData>({
    url: '/sys/profile'
  })
}
