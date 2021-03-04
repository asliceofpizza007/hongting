import { createI18n } from 'vue-i18n';
import langTw from './tw';
import langEn from './en';

const messages = {
  en: langEn,
  tw: langTw
};


const i18n = createI18n({
  locale: 'tw',
  fallbackLocale: 'tw',
  messages
});

export default i18n;