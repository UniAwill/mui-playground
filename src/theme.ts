import { createMuiTheme } from '@material-ui/core'
import { blue, blueGrey, grey, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		// !!! FIXME - background does not update automatically?
		background: {
			// default: blueGrey.A400,
			// default: red.A400,
			// default: grey.A400,
			// paper: red.A400,
		},
		primary: blueGrey,
		secondary: blue,
	},
})

export { theme }
