import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT

const instance = axios.create({
	baseURL: API_BASE_URL,
	timeout: TIMEOUT,
	params: {
		units: 'metric'
	}
})
export default instance
