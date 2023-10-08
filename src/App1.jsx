//import React from "react"
//import { useState } from 'react'
import Nav from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './style.css'

/*  export default function App() {
  //       <Hero />
  return (  
    <div className="main">
        
        <Nav />
 
        <Card />
        <h1>App component</h1>
    </div>

  )
}

*/

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?

    - the problem is in duplicating the same properties instead of 
    passing different values as arguments to function Component()


export default function App1() {
  return (
      <div className="contacts">
      
          <div className="contact-card">
              <img src="./src/assets/mr-whiskerson.png"/>
              <h3>Mr. Whiskerson</h3>
              <div className="info-group">
                  <img src="./src/assets/phone-icon.png" />
                  <p>(212) 555-1234</p>
              </div>
              <div className="info-group">
                  <img src="./src/assets/mail-icon.png" />
                  <p>mr.whiskaz@catnap.meow</p>
              </div>
          </div>
          
          <div className="contact-card">
              <img src="./src/assets/fluffykins.png"/>
              <h3>Fluffykins</h3>
              <div className="info-group">
                  <img src="./src/assets/phone-icon.png" />
                  <p>(212) 555-2345</p>
              </div>
              <div className="info-group">
                  <img src="./src/assets/mail-icon.png" />
                  <p>fluff@me.com</p>
              </div>
          </div>
          
          <div className="contact-card">
              <img src="./src/assets/felix.png"/>
              <h3>Felix</h3>
              <div className="info-group">
                  <img src="./src/assets/phone-icon.png" />
                  <p>(212) 555-4567</p>
              </div>
              <div className="info-group">
                  <img src="./src/assets/mail-icon.png" />
                  <p>thecat@hotmail.com</p>
              </div>
          </div>
          
          <div className="contact-card">
              <img src="./src/assets/pumpkin.png"/>
              <h3>Pumpkin</h3>
              <div className="info-group">
                  <img src="./src/assets/phone-icon.png" />
                  <p>(0800) CAT KING</p>
              </div>
              <div className="info-group">
                  <img src="./src/assets/mail-icon.png" />
                  <p>pumpkin@scrimba.com</p>
              </div>
          </div>
          
      </div>
  )
}


*/
import Contact from "./components/Contact"

export default function App1() {
  return (
      <div className="contacts">
          <Contact img="./src/assets/mr-whiskerson.png" name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>

          <Contact 
            img="./src/assets/fluffykins.png"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
          />
          <Contact 
            img="./src/assets/fluffykins.png"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
          />
          <Contact 
            img="./src/assets/pumpkin.png"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
          />
      </div>
  ) 
}

// Destructuring props
//Suppose 