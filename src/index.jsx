import React from 'react'
import ReactDOM from 'react-dom/client'
//  import App1 from './App1.jsx'     // Example with cats
import App from './App.jsx'
import './style.css'

function addTwoNumbersTogether(a, b) {
  return a + b;
}

console.log(addTwoNumbersTogether(5, 9))

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  
/*
  function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"

    const date = new Date()
    const hours12 = date.getHours() % 12
    const hours = date.getHours()

    let timeOfDay 
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else if  (hours >= 17 && hours < 21) {
      timeOfDay = "evening"
    } else {
      timeOfDay = "night"
    }
    
    return (
      <>
        <h1>Hello {firstName} {lastName}!</h1>
//        <h2> It is currently about {date.getHours() % 12} o'clock!</h2>  
//        <h2> It is currently about {new Date().getHours() % 12} o'clock!</h2>   
        <h1> It is currently about {hours12} o&apos;clock</h1>
        <h2> Good {timeOfDay}!</h2>
      </>
    )
}

*/