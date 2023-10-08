//import React from "react"

import '../style.css'

import face from "../assets/face.jpg"
import email from "../assets/email.svg"
import linkedin from "../assets/linkedin-social.svg"
// import ButtonMailto from './ButtonMailto'

export default function Info() {
    return (
        <div className='ifo--div'>
            <div className='info'>
           <img  src={face}  alt="My recent photo"  className="face"  width="317px"/>  
            <h2 className='name'>Dmytro Soroka</h2>
            <h3 className='position'>Frontend Developer</h3>
            <a href='https://www.kipt.kharkov.ua/~cms'>website</a> <br/>
            <a href='https://startling-pavlova-93ee05.netlify.app'>resume</a>
            </div>
            <div className='buttons'>
            <button className='email' onClick={() => window.location = 'mailto:dvsoroka@gmail.com'}><img src={email}></img> Email</button>       
{/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />        */} 
{/* <button className='email'><img src={email}></img> Email</button>   */} 
            <button className='linkedin'><img src={linkedin}></img> LinkedIn</button>
            </div>
        </div>
    )
}