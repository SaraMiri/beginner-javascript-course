/* eslint-disable */

// Strings
console.log("hey")
const name = 'wes';
const middle = "topher";
const last = `bos`

const sentence = 'she\'s so \"cool\"';
const sentence2 = `she\'s so \"cool\"`;
const song = `Ohhh
ya

I like

pizza`;

//const hello = "hello my name is " + name + ".Nice to meet you"
let hello2 = "hello, my name is ";
hello2 = hello2 + name;
hello2 = hello2 + " Nice to meet you";

const hello = `Hello, my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `

<div>
  <h2>${name}</h2>
  <p>${hello}</p>
</div>
`;

document.body.innerHTML = html;

// Numbers
const sweets = 15;
const people = 5;

const numberOfSweets = sweets / people;
const remainder = sweets % people;
console.log(`The number of sweets per person is ${numberOfSweets} and the remainder is ${remainder}.`)

// Objects
const person = {
  first : "Sara",
  last : "MR",
  age : 100
}
console.log(person, person.first)

// Null and Undefined
const cher = {
  first: "Cher"
};
const fredi = {
  first :"Fredi",
  last: "Leis",
};

fredi.first = "Leis";
fredi.last = null;

// Booleans (use === triple equals to compare type and value, only == two to compare the value)
let isDrawing = false;
const age = 18;
const ofAge = age > 18;
console.log(ofAge)