import { createI18n } from 'vue-i18n'
import enLocale from './lang/en'
import zhLocale from './lang/zh'
import Storage from '@/utils/CachaStorage'
const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}
function getLanguage() {
  if (Storage.getItem('language')) {
    return Storage.getItem('language')
  } else {
    return 'zh'
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
