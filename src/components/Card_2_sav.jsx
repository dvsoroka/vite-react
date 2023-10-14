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