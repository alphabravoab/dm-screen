import React from 'react'
import {withStyles} from 'react-jss'

const styles = {
    diceFlag: {
        width: '40px',
        backgroundColor: '#b80b0b',
        color: 'white',
        height: '20px',
        textAlign: 'center',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    stripe: {
        height: '20px',
        alignSelf: 'flex-start',
        width: '5px',
        backgroundColor: 'blue',
    },
    bottom: {
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid #b80b0b"
    }
}

const Dice = ({value, classes}) => {
    return(<div>
        <div className={classes.diceFlag}><div className={classes.stripe}></div>{value}<div className={classes.stripe}></div></div>
        <div className={classes.bottom}></div>
        </div>
    )
}

export default withStyles(styles)(Dice)
