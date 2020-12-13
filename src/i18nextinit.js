import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "assets/locales/en/translation.json";
import translationID from "assets/locales/id/translation.json";
import Cookie from 'js-cookie'

const langCookieName = process.env.REACT_APP_LANG_COOKIE_NAME
const defaultLang = Cookie.get(langCookieName) || process.env.REACT_APP_DEFAULT_PREFERRED_LANG
const fallbackLng = [`${defaultLang}`];
Cookie.set(langCookieName, defaultLang)
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
