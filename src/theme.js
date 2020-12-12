import { createMuiTheme }  from '@material-ui/core/styles'
const white = '#fff'
const primary = {
	main: '#1a357c',
	dark: '#005bb2', // get this from https://material-ui.com/customization/color/#playground after set primary color
	light: '#339bff', // get this from https://material-ui.com/customization/color/#playground after set primary color
	contrastText: white,
}
const theme = createMuiTheme({
  palette: {
    primary
  },
})
export default theme
