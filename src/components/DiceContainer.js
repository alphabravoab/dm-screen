import React, { useState } from 'react'
import {withStyles} from 'react-jss'
import DiceRoll from './DiceRoll'

const styles = {
    diceRow: {
        display: 'flex',
        width: '80%',
        backgroundColor: '#d6c8ab',
        maxHeight: '60px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        border: '2px inset'
    },
    kind: {
        margin: 'auto 5px auto 5px',
    }
}

const dices = [{name: 'D20', sides: 20}, {name: 'D12', sides: 12}, {name: 'D10', sides: 10}, {name: 'D%', sides: 100},  {name: 'D8', sides: 8}, {name: 'D6', sides: 6}, {name: 'D4', sides: 4}]

const DiceContainer = ({classes}) => {
    return (
        <div>
            {dices.map(dice=> <div key={dice.name} className={classes.diceRow}><div className={classes.kind}>{dice.name}</div> <DiceRoll sides={dice.sides} /></div> )}   
        </div>
    )
}

export default withStyles(styles)(DiceContainer)
