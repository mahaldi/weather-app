import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'
import Checkpoints from './services/checkpoints'
import IndexPage from 'pages/Index'
import history from './history'
import theme from './theme'
import MainLayout from 'layouts'
const Root = () => {
	return (
		<Router history={history}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Switch>
					<MainLayout>
						<Route path={Checkpoints.index} exact component={IndexPage}/>
					</MainLayout>
				</Switch>
			</ThemeProvider>
		</Router>
	)
}

export default Root
