import { Button, Container, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'
import './App.css'

const useStyles = makeStyles({
	app: {},
})

const App: FC = () => {
	const classes = useStyles()

	return (
		<Container className={classes.app}>
			<Button color="primary" variant="contained" fullWidth>
				Button A
			</Button>
			<Button color="secondary" variant="contained" fullWidth>
				Button B
			</Button>
			<Button variant="contained" fullWidth>
				Button C
			</Button>
		</Container>
	)
}

export { App }
