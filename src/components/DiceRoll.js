import React, {useEffect, useState} from 'react'
import {withStyles} from 'react-jss'
import Dice from './Dice'

const styles = {
    diceRow: {
        display: 'flex',
        height: '50px',
        // padding: '40px', 
        color: 'white', 
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'green',
    },
    dices: {
        display: 'flex',
        width: '80%',
    },
    controllDice: {
        minWidth: '100px',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    diceInput: {
        width: '10px',
    },
}
const DiceRoll = ({sides, classes}) => {
    const [rolls, startRoll] = useState([0])
    const [total, changeTotal] = useState(0)
    const [numberOfDice, changeNumberOfDice] = useState(0)
    const result = () => Math.floor(Math.random()*sides) +1
    let makeRolls = () => Array(numberOfDice).fill(0).map(result)

    useEffect(() => {
        changeTotal(rolls.reduce((acc, cv) => acc + cv)) 
    }, [rolls])

    const rolling = () => {
        startRoll(makeRolls())    
    }
    return (
        <div className={classes.diceRow}>
           <div className={classes.controllDice}>
               <button onClick={() => changeNumberOfDice(numberOfDice +1)}>+</button>
               <input className={classes.diceInput} value={numberOfDice} onChange={e => changeNumberOfDice(parseInt(e.target.value))}></input>
               <button onClick={() => changeNumberOfDice(numberOfDice -1)}>-</button> 
            </div> 
           <div className={classes.dices}>{rolls.map((r, i) => <Dice key={`${r},${i}`} value={r} />)}</div>
           <div><Dice value={total} isTotal={true} /></div>
           <button onClick={rolling}>Start Roll</button>
        </div>
    )
}

export default withStyles(styles)(DiceRoll)
