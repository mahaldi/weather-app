import Cookie from 'js-cookie'
import moment from 'moment'

export const langCookieName = process.env.REACT_APP_LANG_COOKIE_NAME
export const defaultLang = Cookie.get(langCookieName) || process.env.REACT_APP_DEFAULT_PREFERRED_LANG
export const availableLanguages = ['id', 'en']
export const convertEpochtoTime = epoch => {
	return moment.unix(epoch).format('h:mm A')
}
