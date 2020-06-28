const age = 100 // Global scope

function go() {
  const myAge = 200; //Don't use the same name variable as the one in the global scope (confusing)
  const hair = "blonde";
  console.log(age);
  console.log(myAge);
  console.log(hair);
}

go();

function isCool(name) {
  var cool;
  if (name ==="Sara") {
    cool = true;
  }
  console.log(cool);
  return cool;
}

/*function isCool(name) {
  if (name ==="Sara") {
    let cool = true;
  }
  console.log(cool);
  return cool;
} */

for (let i = 0; i < 10; i++){
  console.log(i)
}

const dog = "Perdita"; // Global scope

function logDog(dog) {
  console.log(dog); //This is going to load the variable dog in the global scope(Perdita)
}

function go() {
  const dog = "Lume";
  logDog() // Loads the first dog in the global scope
}

// go()

function go1() {
  const dog = "Lume";
  logDog(dog); // Loads the string or variable dog in the function with logDog(dog)
};

// go1()

function go3() {
  const dog = "Lume";
  logDog("Lume"); // Loads the string or variable dog in the function with logDog(dog)
};

// go3()

// Function inside a function
function yell() {
  function sayHi(name) {
    console.log(name.toUpperCase());
  }
  sayHi();
};

// The functions separately
function yell1() {
  console.log(name.toUpperCase());
};

function sayHi(name){
  yell1();
};

yell1();