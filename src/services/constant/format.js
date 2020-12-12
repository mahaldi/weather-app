import Cookie from 'js-cookie'

export const langCookieName = process.env.REACT_APP_LANG_COOKIE_NAME
export const defaultLang = Cookie.get(langCookieName) || process.env.REACT_APP_DEFAULT_PREFERRED_LANG
export const availableLanguages = ['id', 'en']
