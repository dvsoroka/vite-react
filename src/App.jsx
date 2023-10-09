//import React from "react"
//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
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
  //       <Hero />
  return (  
    <div className="main">
        
        <Navbar />
        <Hero />
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