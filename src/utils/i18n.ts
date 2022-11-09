import i18n from '@/i18n'
import AppStore from '@/store/app'
import { watch } from 'vue'

export function generatetitle(title: string) {
  return i18n.global.t('msg.route.' + title)
}
export function watchSwitchLang(...cbs: any[]) {
  watch(
    () => AppStore().language,
    () => {
      cbs.forEach((cb) => cb(AppStore().language))
    }
  )
}
