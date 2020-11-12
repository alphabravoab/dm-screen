import React, {useState} from 'react'
import {withStyles} from 'react-jss'
import Dice from './Dice'

const styles = {
    diceRow: {
        display: 'flex',
        height: '50px',
        // padding: '40px', 
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'green',
    },
    dices: {
        display: 'flex',
        width: '80%',
    }
}
const DiceRoll = ({sides, classes}) => {
    const [, startRoll] = useState(false)
    const [numberOfDice, changeNumberOfDice] = useState(1)
    const result = () => Math.floor(Math.random()*sides) +1
    const makeRolls = () => Array(numberOfDice).fill(0).map(result)
    let rolls = makeRolls()
   
    const rolling = () => {
        startRoll(false)
        // small timeout 
        setTimeout(() => {
            rolls=makeRolls()
            startRoll(true), 1
        }, 10
        )
        
    }
    return (
        <div className={classes.diceRow}>
           <div><button onClick={() => changeNumberOfDice(numberOfDice +1)}>+</button> <button onClick={() => changeNumberOfDice(numberOfDice -1)}>-</button> </div> 
           <div className={classes.dices}>{rolls.map((r, i) => <Dice key={`${r},${i}`} value={r} />)}</div>
           <button onClick={rolling}>Start Roll</button>
        </div>
    )
}

export default withStyles(styles)(DiceRoll)
