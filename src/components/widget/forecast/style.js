import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles((theme)=> ({
	root: {
		backgroundImage: 'linear-gradient(#1a357c,#5a3e8c)',
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
		backgroundColor: 'white',
		maxHeight: 306,
		color: 'white'
	},
	celciusIcon: {
		position: 'relative',
		left: -20
	}
}))

export default useStyle
