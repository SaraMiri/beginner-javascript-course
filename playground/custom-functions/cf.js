// Creating our first function (function definition)
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15 ) {
  //This is the body of the function
  console.log("Running calculate bill!")
  const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
  return total;
}

// Function call or run
const saraTotal = 500;
const saraTaxRate = 0.4;
//const myTotal = calculateBill(saraTotal, saraTaxRate);
const myBill = calculateBill(100, undefined , 0.2) // We use undefined to select the default value of the function
console.log(myBill)

//console.log(myTotal);
//console.log(`Your total is $${calculateBill(100, 0.13)}`);

// Another function
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo("Sara");
//console.log(greeting)

// More functions
function doctorize(name) {
 return `Dr. ${name}`;
}

function yell(name = "Sara") {
  return `HEY ${name.toUpperCase()}`;
 }
 //console.log(yell(doctorize("Sara")))