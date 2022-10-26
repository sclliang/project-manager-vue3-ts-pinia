import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import './permission'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgRequire from './icons/index'
import i18n from './i18n'
import element from './plugins/element'

const app = createApp(App)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
SvgRequire(app)
element(app)
app.use(i18n).use(router).mount('#app')
