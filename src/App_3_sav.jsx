//import React from "react"
//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
//import Joke from "./components/Joke"
import './style.css'
import cardData from "./data.js"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
//console.log(cardData)
/* we introduce unique key to get rid of the Warning: "Each child in a list should have a unique "key" prop." */
  const cardElements = cardData.map(item => {
    return <Card 
              key = {item.id}  
              img = {item.coverImg}
              rating = {item.stats.rating}
              reviewCount = {item.stats.reviewCount}
              location ={item.location}
              title = {item.title}
              price = {item.price}
              openSpots = {item.openSpots}    
  
            />
    }
  )
           //       <Hero />
  return (  
    <div>
        <Navbar />
        <section className="cards-list">
            {cardElements}
        </section>
        
{/*        <Card 
          img="katie-zaferes.png"
          rating = "5.0"
          reviewCount = {6}
          location = "USA"
          title = "Life Lessons with Katie Zaferes"
          price = {136}
        />

        <h1>App component</h1>
*/}
        
    </div>

  )
}
// mvm install --lts
// node -v
// npm -v
// npm create vite@latest
/*
 Project name: ... vite-react-new
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in H:\Projects\tutotials\ReactFreeCodeCamp\vite-react-new...

Done. Now run:

  cd vite-react-new
  npm install
  npm run dev

  */