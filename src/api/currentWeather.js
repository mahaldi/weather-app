import api from './index'
import Cookie from 'js-cookie'

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const langCookieName = process.env.REACT_APP_LANG_COOKIE_NAME
const CURRENT_PREFFERED_LANG = Cookie.get(langCookieName) || process.env.REACT_APP_DEFAULT_PREFERRED_LANG

class CurrenWeatherAPI {
	constructor() {
		this.api = api
	}

	getCurrentWeather(location='jakarta') {
		return this.api.get(`/weather`, {
			params: {
				appid: WEATHER_API_KEY,
				q: location,
				lang: CURRENT_PREFFERED_LANG
			},
		})
	}
}

const currenWeatherAPI = new CurrenWeatherAPI()
export default currenWeatherAPI
