import React from 'react'
import reactLogo from '../assets/React-icon.png'

export default function Navbar (){
    return(
        <nav>
            <img className='nav--logo' src={reactLogo}/>
            <div className='nav--title'>ReactFacts</div>
            <div className='nav--text'>React Course - Project 1</div>
        </nav>
    )
}