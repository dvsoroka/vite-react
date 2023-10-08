import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    return (
        <h1>Hello world!</h1>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />)