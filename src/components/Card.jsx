//import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
      <div className="card">
        
{/*       <img className="card--image" src="./src/assets/katie-zaferes.png" />    */}  
{/*      <img className="card--image" src={"./src/assets/" + props.img} />     */} 
        <img className="card--image" src={`./src/assets/${props.img}`} />
          <div className="card--stats">
            <img className="card--star" src="./src/assets/star.png" /> 
{/*             <span>&#x2005;5.0</span>                                      */} 
                <span>&#x2005;{props.rating}</span>
{/*             <span className="gray">&#x2005;(6)• &#x2022; </span>          */}
                <span className="gray">&#x2005;({props.reviewCount}) • </span> 
{/*             <span className="gray">USA</span>                             */} 
                <span className="gray">{props.country}</span> 
          </div>
{/*           <p>Life lessons with Katie Zaferes</p>             */} 
              <p>{props.title}</p>
{/*           <p><span className="bold">From $136 </span> / person</p>       */} 
              <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
    )
}