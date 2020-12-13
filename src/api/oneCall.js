import api from './index'
import Cookie from 'js-cookie'

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const langCookieName = process.env.REACT_APP_LANG_COOKIE_NAME
const CURRENT_PREFFERED_LANG = Cookie.get(langCookieName) || process.env.REACT_APP_DEFAULT_PREFERRED_LANG

class OneCallAPI {
	constructor() {
		this.api = api
	}

	getOneCall({lat, lon}) {
		return this.api.get(`/onecall`, {
			params: {
				appid: WEATHER_API_KEY,
				lang: CURRENT_PREFFERED_LANG,
				exclude: 'minutely,alerts,hourly',
				lat,
				lon
			},
		})
	}
}

const oneCallAPI = new OneCallAPI()
export default oneCallAPI
