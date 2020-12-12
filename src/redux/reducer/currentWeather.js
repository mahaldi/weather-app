import initialState from 'redux/initialState'
import {FETCH_CURRENT_WEATHER_BEGIN, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_CURRENT_WEATHER_FAILED} from 'actions/currentWeather/types'

export const currentWeather = (state = initialState.currentWeather, action) => {
	switch (action.type) {
		case FETCH_CURRENT_WEATHER_BEGIN:
			return {...state, loading: true}
		case FETCH_CURRENT_WEATHER_SUCCESS:
			return {...state, data: action.payload, loading: false, error: false}
		case FETCH_CURRENT_WEATHER_FAILED:
			return {...state, loading: false, error: action.payload}

		default:
			return state
	}
}
