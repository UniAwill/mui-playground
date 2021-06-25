import {
	AppBar,
	Button,
	Grid,
	IconButton,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { FC } from 'react'
import { theme } from './theme'
import './App.css'

const useStyles = makeStyles({
	app: (theme: Theme) => ({
		marginTop: theme.spacing(2),
	}),
	menuButton: (theme: Theme) => ({
		marginRight: theme.spacing(2),
	}),
	title: {
		display: 'flex',
		flexGrow: 1,
	},
})

const App: FC = () => {
	const classes = useStyles(theme)

	return (
		<React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						aria-label="menu"
						className={classes.menuButton}
						color="inherit"
						edge="start"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Grid container className={classes.app}>
				<Grid item xs={2} />
				<Grid item container xs={8} spacing={1}>
					<Grid item xs={12}>
						<Button color="primary" variant="contained" fullWidth>
							Button A
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button color="secondary" variant="contained" fullWidth>
							Button B
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" fullWidth>
							Button C
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</React.Fragment>
	)
}

export { App }
