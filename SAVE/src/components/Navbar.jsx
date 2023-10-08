//import React from 'react'
// import reactLogo from '../assets/react.svg'
export default function Navbar() {
    return (
        <nav>
{/*
            <img  
                   src={reactLogo} 
                   alt="React logo" 
                   className="nav--icon" 
            />  
*/}
            <img src="./src/assets/react.svg" />
            <h3 className="nav--logo_txt">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>    
        </nav>
    )
}