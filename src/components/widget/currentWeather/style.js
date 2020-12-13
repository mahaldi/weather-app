import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles((theme)=> ({
	root: {
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
		backgroundColor: 'white'
	},
	iconPosition: {
		position: 'relative',
		top: 7
	}
}))

export default useStyle
