import React from 'react'
import AirbnbLogo from '../assets/airbnb-logo.png'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img className='navbar--img' src = {AirbnbLogo} />
        </nav>
    )
}