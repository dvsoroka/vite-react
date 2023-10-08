//import React from "react"
//import { useState } from 'react'
import Nav from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './style.css'

export default function App() {
  //       <Hero />
  return (  
    <div className="main">
        
        <Nav />
 
        <Card />
        <h1>App component</h1>
    </div>

  )
}