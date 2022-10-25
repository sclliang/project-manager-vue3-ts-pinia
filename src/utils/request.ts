import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import Storage from '@/utils/CachaStorage'
import { ElMessage } from 'element-plus'
import type { IResponseData } from '@/types/login'
class HttpRequest {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_BASE_API,
      timeout: 10000,
      headers: {
        icode: 'BCD2D5A175597D29'
      }
    })
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = Storage.getItem('token')
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    })
    this.instance.interceptors.response.use(
      (response: IResponseData) => {
        const { success, message, data } = response.data
        if (success) {
          return data
        } else {
          ElMessage.error(message)
          return Promise.reject(new Error(message))
        }
      },
      (error) => {
        ElMessage.error(error.message)
        return Promise.reject(error)
      }
    )
  }
  request<T = any>(config: AxiosRequestConfig) {
    return this.instance.request<T>(config)
  }
  post<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  get<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }
}

export default new HttpRequest()
