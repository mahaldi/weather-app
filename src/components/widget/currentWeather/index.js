import React from 'react'
import style from './style'
import Proptypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {WiCelsius, WiThermometer, WiThermometerExterior, WiHumidity, WiWindy, WiSunrise, WiSunset} from 'weather-icons-react'
import { useTranslation } from "react-i18next";

const CurrentWeather = props => {
	const { t } = useTranslation();
	const classes = style()
	const {data} = props
	const {name, feels_like, temp_max, temp_min, wind, icon, humidity, temp, sunrise, sunset, description} = data
	return (
		<>
			<div className={classes.root}>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Typography variant="h5">{t("weather_today_in")} {name}</Typography>
					</Grid>
					<Grid item>
						<Grid container justify="space-between">
							<Grid item xs>
								<Grid container direction="column" style={{maxHeight: 124}}>
									<Grid item>
										<Grid container>
											<Grid item style={{paddingTop: 10}}>
												<Typography variant="h3">{temp}</Typography>
											</Grid>
											<Grid item>
												<WiCelsius size={48} color='#000'/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item>
										<Typography>{description}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs style={{textAlign: 'right'}}>
								<img src={icon} alt="icon"/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container spacing={3}>
							<Grid item xs>
								<Grid container direction="column" spacing={2}>
									<Grid item>
										<Grid container justify="space-between">
											<Grid item>
												<Typography><WiThermometer className={classes.iconPosition} size={24} color="#000"/>{t("high")} / {t("low")}</Typography>
											</Grid>
											<Grid>
												<Typography>{temp_max}/{temp_min}</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Grid item>
										<Grid container justify="space-between">
											<Grid item>
												<Typography><WiThermometerExterior className={classes.iconPosition} size={24} color="#000"/>{t("feels_like")}</Typography>
											</Grid>
											<Grid>
												<Typography>{feels_like}</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Grid item>
										<Grid container justify="space-between">
											<Grid item>
												<Typography><WiHumidity className={classes.iconPosition} size={24} color="#000"/>{t("humidity")}</Typography>
											</Grid>
											<Grid>
												<Typography>{humidity}%</Typography>
											</Grid>
										</Grid>
									</Grid>

								</Grid>
							</Grid>
							<Grid item xs>
								<Grid container direction="column" spacing={2}>
									<Grid item>
											<Grid container justify="space-between">
												<Grid item>
													<Typography><WiWindy className={classes.iconPosition} size={24} color="#000"/>{t("wind")}</Typography>
												</Grid>
												<Grid item>
													{wind}
												</Grid>
											</Grid>
										</Grid>
									<Grid item>
										<Grid container justify="space-between">
											<Grid item>
												<Typography><WiSunrise className={classes.iconPosition} size={24} color="#000"/>{t("sunrise")}</Typography>
											</Grid>
											<Grid>
												<Typography>{sunrise}</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Grid item>
										<Grid container justify="space-between">
											<Grid item>
												<Typography><WiSunset className={classes.iconPosition} size={24} color="#000"/>{t("sunset")}</Typography>
											</Grid>
											<Grid>
												<Typography>{sunset}</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	)
}
CurrentWeather.defaultProps = {
	data: {
		description: '',
		icon: '',
		humidity: 0,
		pressure: 0,
		temp: 0,
		sunrise: '',
		sunset: '',
		feels_like: 0,
		temp_max: 0,
		temp_min: 0,
		wind: 0,
		name: ''
	}
}
CurrentWeather.propTypes = {
	data: Proptypes.shape({
		description: Proptypes.string,
		icon: Proptypes.string,
		humidity: Proptypes.number,
		pressure: Proptypes.number,
		temp: Proptypes.number,
		feels_like: Proptypes.number,
		temp_max: Proptypes.number,
		temp_min: Proptypes.number,
		wind: Proptypes.number,
		name: Proptypes.string
	})
}

export default CurrentWeather
