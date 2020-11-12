import React from 'react'
import {withStyles} from 'react-jss'

const styles = {
    diceFlag: {
        margin: '5px',
        width: '40px',
        backgroundColor: '#b80b0b',
        color: 'white',
        height: '20px',
        textAlign: 'center',
        padding: '10px 0',
        position: 'relative',
        borderRadius: '0 0 15px 15px',
    },
    stripe: {
        height: '5px',
        width: '40px',
        justifySelf: 'flex-start',
        position: 'absolute',
        top: 0,
        alignSelf: 'flex-start',
        
        backgroundColor: 'blue',
    },
}

const Dice = ({value, classes}) => {
    return ( 
        <div className={classes.diceFlag}><div className={classes.stripe}></div>{value}</div>    
    )
}

export default withStyles(styles)(Dice)
