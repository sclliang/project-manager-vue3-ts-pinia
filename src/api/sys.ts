import HttpRequest from '@/utils/request'
import type { IUserInfo, IToken } from '@/types/login'
/**
 * 登录
 */
export const login = (data: IUserInfo) => {
  return HttpRequest.post<IToken>({
    url: '/sys/login',
    data
  })
}
