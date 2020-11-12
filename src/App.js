import React from "react"
import {withStyles} from 'react-jss'
import DiceContainer from './components/DiceContainer'

const styles = {
    main: {
        backgroundColor: '#ECDDBF',
        border: 0,
        minHeight: '100vh',
    }
}

const App = ({classes}) => {
    return (
        <div className={classes.main}>
            <DiceContainer />
        </div>
    )
}

export default withStyles(styles)(App)