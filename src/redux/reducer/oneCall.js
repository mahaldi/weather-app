import {FETCH_ONE_CALL_BEGIN, FETCH_ONE_CALL_SUCCESS, FETCH_ONE_CALL_FAILED} from 'actions/oneCall/types'
import initialState from 'redux/initialState'

export const oneCall = (state = initialState.oneCall, action) => {
	switch (action.type) {
		case FETCH_ONE_CALL_BEGIN:
			return {...state, loading: true}
		case FETCH_ONE_CALL_SUCCESS:
			return {...state, data: action.payload, loading: false, error: false}
		case FETCH_ONE_CALL_FAILED:
			return {...state, loading: false, error: action.payload}

		default:
			return state
	}
}
