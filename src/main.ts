import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import './permission'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgRequire from './icons/index'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
SvgRequire(app)
app.use(pinia).use(router).mount('#app')
