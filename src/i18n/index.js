import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './messages/en'

Vue.use(VueI18n)

const messages = {
  en: en
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
