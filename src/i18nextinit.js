import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "assets/locales/en/translation.json";
import translationID from "assets/locales/id/translation.json";
import Coookie from 'js-cookie'

const defaultLang = Coookie.get('preferred_lang') || process.env.REACT_APP_DEFAULT_PREFERRED_LANG
const fallbackLng = [`${defaultLang}`];
Coookie.set('preferred_lang', defaultLang)
const availableLanguages = ["en", "id"];

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
