import React from 'react'
import Grid from '@material-ui/core/Grid'
import Proptypes from 'prop-types'
import style from './style'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from "react-i18next";
import {WiCelsius} from 'weather-icons-react'

const ForeCast = props => {
	const { t } = useTranslation();
	const classes = style()
	const {data} = props
	const {locationName, morningTemp, afterNoonTemp, eveningTemp, nightTemp} = data
	return (
		<>
			<div className={classes.root}>
				<Grid container direction="column" spacing={1}>
					<Grid item>
						<Typography variant="h5" color="inherit">{t("todays_forecast")} {locationName}</Typography>
					</Grid>
					<Grid item>
						<Grid container>
							<Grid item xs>
								<Typography variant="h5" align="center" color="inherit">{t("morning")}</Typography>
								<Typography variant="h4" align="center" color="inherit">{morningTemp} <WiCelsius size={36} className={classes.celciusIcon} color='#fff'/></Typography>
							</Grid>
							<Grid item xs>
								<Typography variant="h5" align="center" color="inherit">{t("afternoon")}</Typography>
								<Typography variant="h4" align="center" color="inherit">{afterNoonTemp} <WiCelsius size={36} className={classes.celciusIcon} color='#fff'/></Typography>
							</Grid>
							<Grid item xs>
								<Typography variant="h5" align="center" color="inherit">{t("evening")}</Typography>
								<Typography variant="h4" align="center" color="inherit">{eveningTemp} <WiCelsius size={36} className={classes.celciusIcon} color='#fff'/></Typography>
							</Grid>
							<Grid item xs>
								<Typography variant="h5" align="center">{t("night")}</Typography>
								<Typography variant="h4" align="center">{nightTemp} <WiCelsius size={36} className={classes.celciusIcon} color='#fff'/></Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	)
}
ForeCast.defaultProps = {
	data: {
		locationName: '',
		morningTemp: 0,
		afterNoonTemp: 0,
		eveningTemp: 0,
		nightTemp: 0
	}
}
ForeCast.propTypes = {
	data: Proptypes.shape({
		locationName: Proptypes.string,
		morningTemp: Proptypes.number,
		afterNoonTemp: Proptypes.number,
		eveningTemp: Proptypes.number,
		nightTemp: Proptypes.number
	})
}
export default ForeCast
