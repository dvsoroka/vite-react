//import React from "react"
//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
//import Joke from "./components/Joke"
import './style.css'

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
//   const element = <h1>Hello</h1>
//   console.log(element);
 const colors1 = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

 /*
Challenge: turn the strings in the array into <h3> elements instead
*/

 const colorsHeads = colors1.map(item => `<h3>${item}</h3>`)   // WRONG!  It should be an array of JSX elements:
  const colors = [
    <h3>Red</h3>, 
    <h3>Orange</h3>, 
    <h3>Yellow</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Indigo</h3>,
    <h3>Violet</h3>
]     //  Warning: Each child in a list should have a unique "key" prop.

  console.log(colorsHeads)
  console.log("colors1:", colors1)
  return (
      <div>
{/*        <h3>Red</h3>
        <h3>Orange</h3> 
        <h3>Yellow</h3>
        <h3>Green</h3>
        <h3>Blue</h3>
        <h3>Indigo</h3>
        <h3>Violet</h3>
*/}   
        {colors}                    {/* Warning: Each child in a list should have a unique "key" prop.*/} 
      </div>
  )
  
  //       <Hero />
  return (  
    <div className="main">
        
        <Navbar />
    
        <Card 
          img="katie-zaferes.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life Lessons with Katie Zaferes"
          price = {136}
        />
        <h1>App component</h1>
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