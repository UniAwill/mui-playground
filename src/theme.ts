import { createMuiTheme } from '@material-ui/core'
import { blue, blueGrey, grey, purple, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		background: {
			default: grey.A400,
		},
		primary: purple,
		secondary: blue,
	},
})

export { theme }
