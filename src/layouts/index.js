import React from 'react'
import AppBar from 'components/appBar'
import style from './style'

const MainLayout = props => {
	const {children} = props
	const classes = style()
	return (
		<React.Fragment>
			<div className={classes.grow}>
				<AppBar />
			</div>
			<div className={classes.body}>
				{children}
			</div>
		</React.Fragment>
	)
}

export default MainLayout
