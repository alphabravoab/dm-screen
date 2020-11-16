import React, { useState } from 'react'
import {withStyles} from 'react-jss'
import DiceRoll from './DiceRoll'

const styles = {
    diceContainer: {
        position: 'relative',
        paddingTop: '15px'
    },
    diceBorder: {
        padding: '5px',
        backgroundColor: '#940011',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '5px inset',
       
    },
    diceRow: {
        display: 'flex',
        width: '95%',
        backgroundColor: '#d6c8ab',
        maxHeight: '60px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        border: '2px inset'
    },
    kind: {
        margin: 'auto 5px auto 5px',
    },
    showDices: {
        position: 'absolute',
        top: '200px',
        right: '-74px',
        transformOrigin: '0 0' ,
        backgroundColor: 'black',
        width: '100px',
        color: 'white',
        border: 0,
        borderRadius: '10px 10px 0 0',
        padding: '5px',
        transform: 'rotate(-90deg)'
    }
}

const dices = [{name: 'D20', sides: 20}, {name: 'D12', sides: 12}, {name: 'D10', sides: 10}, {name: 'D%', sides: 100},  {name: 'D8', sides: 8}, {name: 'D6', sides: 6}, {name: 'D4', sides: 4}]

const DiceContainer = ({classes}) => {
    const [showDices, changeShowDices] = useState(false)

    const onClick = () =>{
        changeShowDices(!showDices)
    }
    return (
        <div className={classes.diceContainer}>
            {showDices && <div className={classes.diceBorder}>
                {dices.map(dice=> <div key={dice.name} className={classes.diceRow}><div className={classes.kind}>{dice.name}</div> <DiceRoll sides={dice.sides} /></div> )}   
                
            </div>}
            <button className={classes.showDices} onClick={onClick}>
                {!showDices && <>Show dices</>}
                {showDices && <>Hide dices</>}
            </button>
        </div>
    )
}

export default withStyles(styles)(DiceContainer)
