import i18n from '@/i18n'

export function generatetitle(title: string) {
  return i18n.global.t('msg.route.' + title)
}
