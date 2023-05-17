import React from 'react'

export default function Main (){
    return(
        <main>
            <h1 className="main--heading">Fun facts about React</h1>
            <ul className = "main--list">
                <li className ="main--list--items">Was first released in 2013</li>
                <li className ="main--list--items">Was originally crated by Jordan Walke</li>
                <li className ="main--list--items">Has well over 100k stars on GitHub</li>
                <li className ="main--list--items">Is maintained by Facebook</li>
                <li className ="main--list--items">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}