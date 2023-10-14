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

  https://www.youtube.com/watch?v=bMknfKXIFA8  (4:10:16)
*/


/*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
*/

{/*           key = {item.id}  
              img = {item.coverImg}
              rating = {item.stats.rating}
              reviewCount = {item.stats.reviewCount}
              location ={item.location}
              title = {item.title}
              price = {item.price}
              openSpots = {item.openSpots}    */}  
/*
    Challenge: Fix our component! 😱
    */

export default function Card(props) {
  let badgeText     // initially - undefined, equivalent to "false"
  if (props.openSpots === 0) {    // even if equals to 0 it is not undefined, so it is "true"
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {   // if it is equal to some number, it is also "true"
    badgeText = "ONLINE"
  }
  return (
      <div className="card">
{/*       {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}    - if (openSpots === 0) then render a <div>*/} 
{/*       {!props.openSpots && <div className="card--badge">SOLD OUT</div>}       - equivalent to the line above  */} 
          {badgeText  && <div className="card--badge">{badgeText}</div>}  
          <img className="card--image" src={`./src/assets/${props.img}`} />
          <div className="card--stats">
              <img className="card--star" src="./src/assets/star.png" /> 
              <span>&#x2005;{props.rating}</span>
              <span className="gray">&#x2005;({props.reviewCount}) • </span> 
              <span className="gray">{props.location}</span> 
          </div>
          <p className="card--title">{props.title}</p>
          <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
      </div>
    )
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]



const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];



const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
  return num * num
})

console.log(squares)

const squares1 = nums.map((i) => i * i)
const squares2  = nums.map((i) => {return (i * i)} )  // with block body, explicit "return" needed

console.log(squares1)
console.log(squares2)


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here


const capNames = names.map(function(name) {
    const firstletter = name.charAt(0)
    const firtCap = firstletter.toUpperCase()
    const remainingLetters = name.slice(1)
    return (firtCap+remainingLetters)
})
console.log(capNames)


const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalized)

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const pokemoned = pokemon.map((item) => "<p>"+item+"</p>" )

console.log(pokemoned)

// const paragraphs = pokemon.map((mon) => {
//   return `<p>${mon}</p>`
// })

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
console.log(paragraphs)