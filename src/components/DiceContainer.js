import React, { useState } from 'react'
import {withStyles} from 'react-jss'
import DiceRoll from './DiceRoll'

const styles = {
    diceRow: {
        display: 'flex',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'orange',
        marginBottom: '10px',
        textAlign: 'center',
        justifyContent: 'space-evenly',
    },
    kind: {
        marginTop: '60px',
    }
}

const DiceContainer = ({classes}) => {
    return (
        <div>
            <div className={classes.diceRow}><div className={classes.kind}>D20</div> <DiceRoll sides={20} /></div> 
            <div className={classes.diceRow}><div className={classes.kind}>D12</div> <DiceRoll sides={12} /></div> 
            <div className={classes.diceRow}><div className={classes.kind}>D10</div> <DiceRoll sides={10} /></div> 
            <div className={classes.diceRow}><div className={classes.kind}>D%</div> <DiceRoll sides={100} /></div> 
            <div className={classes.diceRow}><div className={classes.kind}>D8</div> <DiceRoll sides={8} /></div> 
            <div className={classes.diceRow}><div className={classes.kind}>D6</div> <DiceRoll sides={6} /></div> 
            <div className={classes.diceRow}><div className={classes.kind}>D4</div> <DiceRoll sides={4} /></div> 
            
        </div>
    )
}
// 
export default withStyles(styles)(DiceContainer)
