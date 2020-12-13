import {combineReducers} from 'redux'
import {currentWeather} from './currentWeather'
import {currentLocation} from './currentLocation'
import {oneCall} from './oneCall'

const rootReducer = combineReducers({
	currentWeather,
	currentLocation,
	oneCall
})

export default rootReducer
