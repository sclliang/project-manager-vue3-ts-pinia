// 请求数据类型
interface IPermission {
  menus: Array<string>
  points: Array<string>
}
interface IRole {
  id: string
  title: string
}

export interface IUserInfoData {
  avatar?: string
  id?: string
  title?: string
  username?: string
  permission?: IPermission
  role?: IRole[]
}
