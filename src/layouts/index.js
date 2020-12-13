import React from 'react'
import AppBar from 'components/appBar'
import style from './style'
import Grid from '@material-ui/core/Grid'

const MainLayout = props => {
	const {children} = props
	const classes = style()
	return (
		<React.Fragment>
			<div className={classes.grow}>
				<AppBar />
			</div>
			<div className={classes.bodyWrapper}>
				<div className={classes.body}>
					<Grid container spacing={3}>
						<Grid item xs>
							{children}
						</Grid>
					</Grid>
				</div>
			</div>
		</React.Fragment>
	)
}

export default MainLayout
