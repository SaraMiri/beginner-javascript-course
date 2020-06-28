//function doctorize(firstName) {
//  return `Dra. ${firstName}`
//}

// Anonymous function
//function (firstName) {
 // return `Dra. ${firstName}`
//}

// This is going to fail
// console.log(doctorize("Sara"))

//This is going to work properly
console.log(doctorize2("Sara"))

// Function Expression
const doctorize = function (firstName) {
 return `Dra. ${firstName}`
}

function doctorize2(firstName) {
  return `Dra. ${firstName}`
}

// Arrow functions
const inchToCM = inches => inches * 2.54;

const add = (a,b=3) => a +b;

function makeABaby(first,last) {
  const baby = {
    name:`${first} ${last}`,
    age: 0
  };
  return baby
}
// Returning an object
const makeABaby2 = (first,last) =>  ({ name: `${first} ${last}`, age: 0 });

// IIFE: Inmediately Invoked Function Expression
(function (age) {
  return `You are cool and age${age}`
})(2)

// Methods
const sara = {
  name: "Sara MR",
  // Method
  sayHi: function() {
    console.log("Hey Sara");
    return "Hey Sara"
  },
  // Short hand Method
  yellHi(){
    console.log("Hey Sara");
  },
  // Arrow function
  whisperHi: () => {
    console.log("Hi, I'm a dog")
  }
}

// Callback Functions
// Click callback
const button = document.querySelector(".clickMe");

function handleClick () {
  console.log("Nice click");
};

// You can also call a function on the addEventListener (handleClick, for example)
button.addEventListener("click",function() {
  console.log("Nice Job!!")
});

// Timer Callback
setTimeout(sara.yellHi, 1000)
setTimeout(function() {
  console.log("Done! Time to eat.")
}, 1000);