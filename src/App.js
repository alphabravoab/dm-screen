import React from "react"
import {withStyles} from 'react-jss'
import DiceContainer from './components/diceRolling/DiceContainer'
import CharacterAdvancement from "./components/Rules/CharacterAdvancement"

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
            <CharacterAdvancement />
        </div>
    )
}

export default withStyles(styles)(App)