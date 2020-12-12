import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL_GOOGLE
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT
const NODE_ENV = process.env.NODE_ENV
const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY
const middle_url = '/geolocation/v1'
const instance = axios.create({
	baseURL: API_BASE_URL,
	timeout: TIMEOUT,
})


class GooleAPI {
	constructor() {
		this.api = instance
	}

	getCurrentLocation() {
		const defaultLoc = {
			data: {
				accuracy: 73665,
				location: {
					lat: -6.4126975999999996,
					lng: 107.08910080000001
				}
			}
		}
		if(NODE_ENV === 'development') { //need this because i have to pay for the api
			let promise = new Promise(function(resolve) {
				setTimeout(() => resolve(defaultLoc), 1000);
			});
			return promise
		}
		return this.api.post(`${middle_url}/geolocate?key=${GOOGLE_MAP_API_KEY}`).catch(() => {
			return defaultLoc
		})
	}
}

const gooleAPI = new GooleAPI()
export default gooleAPI
