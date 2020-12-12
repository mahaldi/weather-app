import {FETCH_ONE_CALL_BEGIN, FETCH_ONE_CALL_SUCCESS, FETCH_ONE_CALL_FAILED} from './types'
import OnceCallApi from 'api/oneCall'

export const fetchOneCall = ({lat, lon}) => dispatch => {
	dispatch({type: FETCH_ONE_CALL_BEGIN})
	return OnceCallApi.getOneCall({lat, lon})
		.then((response) => {
			dispatch({
				type: FETCH_ONE_CALL_SUCCESS,
				payload: response.data,
			})
			return response.data
		})
		.catch((err) => {
			dispatch({
				type: FETCH_ONE_CALL_FAILED,
				payload: err,
			})
			return err
		})
}
