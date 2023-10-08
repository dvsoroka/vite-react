//import React from "react"
//import { useState } from 'react'


                                                // The parameter you put inside the component  will be an object that represents all of props  that your component recieved.
//export default function Contact(props) {      // So what I could decide to do is just desructure that object immediately as i recieve it inside of my function here
  export default function Contact({img, name, phone, email}) {    // which means that I could say {img, name, phone, email}. 
    //    console.log(props)                                      // And by destructuring our props we essentually have new variables img, name, phone, email
    return (                                                      // so we have to change our previous code  
        
            <div className="contact-card">
{/*             <img src={props.img}/>        */}
                <img src={img}/>
{/*             <h3>{props.name}</h3>         */}
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./src/assets/phone-icon.png" />
{/*                 <p>{props.phone}</p>      */}
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src="./src/assets/mail-icon.png" />
{/*                 <p>{props.email}</p>       */}
                    <p>{email}</p>
                </div>
            </div>
        
    )
}

/*
{
    img: './src/assets/mr-whiskerson.png', 
    name: 'Mr. Whiskerson', 
    phone: '(212) 555-1234', 
    email: 'mr.whiskaz@catnap.meow'
}

*/

/*
{
    "image": "./src/assets/mr-whiskerson.png",
    "name": "Mr. Whiskerson",
    "phone": "(212) 555-1234",
    "email": "mr.whiskaz@catnap.meow"
}

*/




/*
QUIZ:


1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!

*/
// Destructuring props
//Suppose  we have an object 

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

// if I want to log a single variable: 

console.log(person.phone)

// However in certain circumstances it's  could be nice to destructure this object  
// and pull out the property names for your own use 

const {img:image, name} = person;       // I can give another name "image" to  the "img" using the colon ":"
console.log(image);       // ./images/mr-whiskerson.png
console.log(name);      // Mr. Whiskerson

var voxel = {x: 3.6, y: 7.4, z: 6.54}
const {x: a, y: b, z:c} = voxel
console.log(a)      // 3.6
console.log(b)      // 7.4
console.log(c)      // 6.54

const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79,
};

function getTempOfTmrw(avgTemp) {
    const { tomorrow: temOfTmrw } = avgTemp;
    return temOfTmrw;
}
console.log(getTempOfTmrw(AVG_TEMP));       // 79
