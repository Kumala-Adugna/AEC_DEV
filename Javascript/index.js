// Data Types

// String
let name= "KUMALA";

console.log(name);

//Number
let age = 20;
console.log(age);

//Boolean

let isMarried = true;
 
console.log(isMarried);

//Null 

let y = null;

console.log (y);


//Array

let fruits = ["apple", "banana"];
console.log(fruits);

//Variables

let  name ="Kumala"; //for changeable values
const PI =3.14; // for unchangeable values

//var

var name ="ME"; // VERY OLD AND RARELY USED. IS ALSO changeable

console.log(name);
console.log(PI);
console.log(name);


//FUNCTIONS

//are reusable codes.
function greet(){
    console.log("Hello, World!");
}
greet();

function f(x) {
    console.log(2*x**2+1);
}
f(2);

function add(a,b) {
    return a+b;
    //we use return always within functions but we can use 
    //console.log() outside function
}

add(2,3);

//CONDITIONALS




let age = 20;
if (age >=18){
    console.log("You are an Adult");
}
else {
    console.log("You are a Minor");
}

//Ternary Operators

let age = 20;
let result = age>=18? "Yare an Adult.": "You are a minor.";
console.log(result);


// = is Assignment operator
//== is equlas to
// The strict equality operator compares both the value and the type. If the types are different, it immediately returns false. No type coercion happens.

//     5 === 5 → true (Same type, same value)

//     5 === '5' → false (Different types: one is a Number, the other is a String)

//     null === undefined → false

//     0 === false → false


// DOM Intro

// The DOM, or Document Object Model, is the bridge between your web page's HTML and your JavaScript code.

// When a web page loads, the browser takes the raw HTML document and automatically converts it into an 
// object-oriented representation that JavaScript can understand, modify, and play with.
// 1. What Exactly is the DOM?

// Think of the DOM as a translator.

//     HTML is just static text. JavaScript cannot directly read or interact with raw HTML text.

//     The browser reads that HTML and builds the DOM—a structured model of objects.

//     JavaScript can interact with objects. By changing the DOM objects, JavaScript instantly changes what you see on the screen.

// The Tree Structure

// The DOM is structured exactly like a family tree (or a hierarchical tree data structure). Every HTML element is a node in this tree.

// If you have HTML like this:
// HTML

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Page</title>
//   </head>
//   <body>
//     <h1>Hello World</h1>
//     <p>Welcome to my site.</p>
//   </body>
// </html>

// The DOM views it as a tree hierarchy:

//     document is the root (the ultimate grandparent).

//         <html> is the child of the document.

//             <head> and <body> are siblings.

//                 <h1> and <p> are children of <body>.

// 2. What Can You Do with the DOM?

// Because JavaScript has access to this tree, you can dynamically change almost anything on a webpage without requiring a page reload. You can:

//     Change text and content: Swap out a heading, update a shopping cart total, or fill in a user's name.

//     Change styles: Dynamically change CSS colors, hide elements, or animate a menu dropping down.

//     Add or delete elements: Create a new list item when a user clicks "Add to Checklist", or delete an alert box when they hit "Dismiss".

//     Listen to events: Watch for user actions like clicks, keypresses, mouse movements, or form submissions.

// 3. A Quick Code Example

// To interact with the DOM, you start with the global document object. Here is a simple look at how JavaScript grabs an element and modifies it:
// HTML

// <h1 id="main-heading">Old Text</h1>
// <button id="btn">Click Me</button>

// <script>
//   // 1. Select elements from the DOM
//   const heading = document.getElementById('main-heading');
//   const button = document.getElementById('btn');

//   // 2. Modify an element's content and style
//   heading.textContent = 'Hello, DOM!';
//   heading.style.color = 'blue';

//   // 3. Listen for a user action (Event)
//   button.addEventListener('click', () => {
//     alert('You interacted with the DOM tree!');
//   });
// </script>

// Key Takeaway

//     💡 The Core Concept: HTML is the structure you write in your text editor. 
//     The DOM is the live, interactive version of that structure living in the browser's 
//     memory, waiting for JavaScript to tell it what to do.



