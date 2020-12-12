import {FETCH_CURRENT_LOCATION_BEGIN, FETCH_CURRENT_LOCATION_SUCCESS, FETCH_CURRENT_LOCATION_FAILED} from './types'
import GoogleApi from 'api/googleMaps'

export const fetchCurrentLocation = () => dispatch => {
	dispatch({type: FETCH_CURRENT_LOCATION_BEGIN})
	return GoogleApi.getCurrentLocation()
		.then((response) => {
			dispatch({
				type: FETCH_CURRENT_LOCATION_SUCCESS,
				payload: response.data,
			})
			return response.data
		})
		.catch((err) => {
			dispatch({
				type: FETCH_CURRENT_LOCATION_FAILED,
				payload: err,
			})
			return err
		})
}
