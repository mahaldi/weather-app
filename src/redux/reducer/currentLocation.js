import initialState from 'redux/initialState'
import {FETCH_CURRENT_LOCATION_BEGIN, FETCH_CURRENT_LOCATION_SUCCESS, FETCH_CURRENT_LOCATION_FAILED} from 'actions/currentLocation/types'

export const currentLocation = (state = initialState.currentLocation, action) => {
	switch (action.type) {
		case FETCH_CURRENT_LOCATION_BEGIN:
			return {...state, loading: true}
		case FETCH_CURRENT_LOCATION_SUCCESS:
			return {...state, data: action.payload, loading: false, error: false}
		case FETCH_CURRENT_LOCATION_FAILED:
			return {...state, loading: false, error: action.payload}

		default:
			return state
	}
}
