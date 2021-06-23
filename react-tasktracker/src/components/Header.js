import React from 'react'
import propTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    
    return ( 
        <header className='header'>
            <h1>{title}</h1>
            { location.pathname === '/' && <Button color={ showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> }
        </header>
     )
}


Header.defaultProps = { 
    title: 'Hello Tracker',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

// CSS en JS
// const hadingStyle = {
//     color: 'red',
//     backgroundColor: 'blue',
// }

export default Header