import React from 'react'
import {createUseStyles} from 'react-jss'

const headerStyle = createUseStyles({
    header: props =>({
        backgroundColor: props.color,
        color: 'white',
        padding: '5px'
    })
})
const Header = ({children, ...props}) => {
    
    const classes = headerStyle(props) 
    return(<div className={classes.header}>{children}</div>)
}

export default Header
