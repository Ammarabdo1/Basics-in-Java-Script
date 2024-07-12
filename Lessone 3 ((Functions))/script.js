//? functions or Methods

//todo>> 1)function
//* Basics of function
//* Dynamic function

//! Static function
function sayMyName(name) {
  console.log(`Your name is: ${name}`);
}
sayMyName("Ammar");

//! Dynamic function
function sum(a, b) {
  return a + b;
}
const num1 = sum(1, 3);
console.log(num1);

//! calculateTipAmount()
function calculateAmountTotal(Quantity, Percentage) {
  const amount = (Quantity * Percentage) / 100;
  const all = amount + Quantity;
  return all;
}
const quantity = Number(prompt("Enter Quantity"));
const percentage = Number(prompt("Enter Percentage"));
const all = calculateAmountTotal(quantity, percentage);
console.log(all);

//todo>> 2)Arrow Functions
const sum2 = (a, b) => a + b;
// const sum2 = (a, b) => {return a + b};
console.log(sum2(40, 30));
