import { AxiosResponse } from 'axios'
export interface IUserInfo {
  username: string
  password: string
}
export interface IToken {
  token: string
}
interface IresData {
  success?: boolean
  message: string
  data: any
}

export interface IResponseData extends AxiosResponse {
  data: IresData
}
