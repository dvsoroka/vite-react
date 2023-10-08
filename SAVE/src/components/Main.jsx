// import React from 'react'

import '../style.css'
// import reactGreyLogo from '../assets/react-My-gray.svg'
export default function  Main() {
    return (
      <main className="main-content">
        <h1 className="main--title">Fun Facts about React</h1>
        <ul className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
 {/*     
        <div>
          <svg version="1.1"
           width="300" height="200"
           xmlns="http://www.w3.org/2000/svg">

          <rect width="100%" height="100%" fill="red" />
          <ellipse cx="150" cy="180" rx="150" ry="70" fill= "#33373E" />
          <ellipse cx="150" cy="180" rx="146" ry="66" fill= "red" />
          <circle cx="150" cy="100" r="80" fill="green" />
          <circle cx="150" cy="100" r="20" fill= "#33373E" />

          <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>

          </svg>
          

   <img  src={reactGreyLogo}  alt="React logo"  className="nav--icon"  />  
        </div>    
        */}
      </main>
    )
}

/* 
<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 480 480">
   <ellipse cx="240" cy="240" rx="80" ry="160">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 240 240"
                          to="360 240 240"
                          dur="10s"
                          repeatCount="indefinite"/>
</svg>
*/