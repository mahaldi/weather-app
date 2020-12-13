import {FETCH_CURRENT_WEATHER_BEGIN, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_CURRENT_WEATHER_FAILED} from './types'
import CurrentWeatherApi from 'api/currentWeather'

export const fetchCurrentWeather = location => dispatch => {
	dispatch({type: FETCH_CURRENT_WEATHER_BEGIN})
	return CurrentWeatherApi.getCurrentWeather(location)
		.then((response) => {
			dispatch({
				type: FETCH_CURRENT_WEATHER_SUCCESS,
				payload: response.data,
			})
			return response.data
		})
		.catch((err) => {
			dispatch({
				type: FETCH_CURRENT_WEATHER_FAILED,
				payload: err,
			})
			return err
		})
}
