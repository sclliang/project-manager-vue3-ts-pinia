import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import AppStore from '@/store/app'
export default (app: any) => {
  const store = AppStore()
  app.use(ElementPlus, {
    locale: store.language === 'en' ? en : zhCn
  })
}
