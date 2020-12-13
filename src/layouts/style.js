import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	bodyWrapper: {
		backgroundImage: 'linear-gradient(#a88cc2,#e7cdc1,#fcf9f7)',
		minHeight: '100vh'
	},
	body: {
		display: 'flex',
		position: 'relative',
		top: 64,
		paddingTop: theme.spacing(4),
		[theme.breakpoints.up('sm')]: {
			width: '41%',
			margin: 'auto'
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2)
		}
	},
}))

export default useStyles
