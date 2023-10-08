//import React from "react"
import { useState } from 'react'

import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests"
import './style.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (  
    <div className="main">
        <Info />
        <About />
        <Interests />
        <div className="count">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </div>

  )
}