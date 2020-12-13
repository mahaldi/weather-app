import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchCurrentLocation} from 'actions/currentLocation'
import {fetchCurrentWeather} from 'actions/currentWeather'
import {fetchOneCall} from 'actions/oneCall'
import get from 'lodash/get'
import Skeleton from '@material-ui/lab/Skeleton';
import CurrentWeather from 'components/widget/currentWeather'
import Grid from '@material-ui/core/Grid'
import {convertEpochtoTime} from 'services/constant/format'
import ForeCast from 'components/widget/forecast'

const LandingPage = props => {
	const baseURLIcon = process.env.REACT_APP_BASE_URL_ICONS + '/'
	const [allCurrentWeather, setAllCurrenWeather] = useState({loading: true, data: []})

	const {fetchCurrentLocationConnect, oneCall, fetchCurrentWeatherConnect, fetchOneCallConnect} = props
	const locations = React.useMemo(
		() => ['jakarta', 'bandung', 'bali'],
		[]
	)
	const {loading: loadingForeCast} = oneCall
	const foreCastData = get(oneCall, 'data', {})
	const todayForeCast = get(foreCastData, 'daily[0]', {})
	const reCreateForeCastData = {
		locationName: foreCastData.timezone,
		morningTemp: get(todayForeCast, 'temp.morn', 0),
		afterNoonTemp: get(todayForeCast, 'temp.day', 0),
		eveningTemp: get(todayForeCast, 'temp.eve', 0),
		nightTemp: get(todayForeCast, 'temp.night', 0),
	}
	const onFetchingData = () => {
		fetchCurrentLocationConnect().then(async(result) =>{
			const location = get(result, 'location', {})
			const {lat, lng: lon} = location
				const resultAllWeather = []
				locations.forEach(location => {
					resultAllWeather.push(fetchCurrentWeatherConnect(location))
				})
				await Promise.all(resultAllWeather).then((weathers) => {
					setAllCurrenWeather({loading: false, data: weathers})
				})
				fetchOneCallConnect({lat, lon})
		})
	}
	const renderSkeleton = () => {
		return locations.map(location => {
			return <Grid item key={location}><Skeleton variant="rect" height={328} /></Grid>
		})
	}
	const renderWidgetCurrentWeather = () => {
		return allCurrentWeather.data.map(weather =>{
			const CurrentWeatherData = {
				description: get(weather, 'weather[0].description', ''),
				icon: baseURLIcon + get(weather, 'weather[0].icon', '') + '@2x.png',
				humidity: get(weather, 'main.humidity', 0),
				pressure: get(weather, 'main.pressure', 0),
				temp: get(weather, 'main.temp', 0),
				sunrise: convertEpochtoTime(get(weather, 'sys.sunrise', '')),
				sunset: convertEpochtoTime(get(weather, 'sys.sunset', '')),
				feels_like: get(weather, 'main.feels_like', 0),
				temp_max: get(weather, 'main.temp_max', 0),
				temp_min: get(weather, 'main.temp_min', 0),
				wind: get(weather, 'wind.speed', 0),
				name: get(weather, 'name', '')
			}
			return (
				<Grid item key={weather.id}><CurrentWeather data={CurrentWeatherData}/></Grid>
			)
		})
	}
	useEffect( onFetchingData ,[fetchCurrentLocationConnect, fetchCurrentWeatherConnect, fetchOneCallConnect, locations])
	return (
		<React.Fragment>
			<Grid container direction="column" spacing={4}>
				<Grid item>
					{
						loadingForeCast ? <Skeleton variant="rect" height={149} /> :
						<ForeCast data={reCreateForeCastData}/>
					}
				</Grid>
				{
					allCurrentWeather.loading ?
					renderSkeleton()
					:
					renderWidgetCurrentWeather()
				}
			</Grid>
		</React.Fragment>
	)
}
const mapStateToProps = (state) => ({
	currentWeather: state.currentWeather,
	currentLocation: state.currentLocation,
	oneCall: state.oneCall
})
export default connect(mapStateToProps, {fetchCurrentLocationConnect: fetchCurrentLocation, fetchCurrentWeatherConnect: fetchCurrentWeather, fetchOneCallConnect: fetchOneCall})(LandingPage)

