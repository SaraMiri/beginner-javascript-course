// Creating our first function (function definition)
function calculateBill(billAmount, taxRate ) {
  //This is the body of the function
  console.log(billAmount,taxRate);
  const total = billAmount * (1+ taxRate);
  return total;
}

// Function call or run
const saraTotal = 500;
const saraTaxRate = 0.4;
const myTotal = calculateBill(saraTotal, saraTaxRate);

//console.log(myTotal);
//console.log(`Your total is $${calculateBill(100, 0.13)}`);