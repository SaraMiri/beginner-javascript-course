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
