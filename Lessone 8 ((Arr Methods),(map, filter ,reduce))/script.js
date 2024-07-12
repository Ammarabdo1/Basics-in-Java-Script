//? Array methods (map , filter , reduce)
//! map - loops and returns an array
//! filter - loops and returns an array with matching conditions
//! reduce loops and gives you back the accumulator

//TODO>> 1)map() App to filter the numbers to only numbers greater than another number
const filter = (numbers, greaterThan) => {
  const result = [];
  numbers.map((number) => {
    if (number > greaterThan) {
      result.push(number);
    }
  });
  return result;
};
filter([1, 2, 3, 4, 5, 6], 3);

//TODO>> 2)filter()
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.filter((num) => num > 3 || num < 2));
let members = [
  { name: "ammar", age: 22, salary: 1000000 },
  { name: "yaser", age: 20, salary: 100000 },
  { name: "zeze", age: 18, salary: 1000000 },
];
let result2 = members.filter((member) => member.age > 18);
result2 = result2.map((member) => member.name).join(", ");
document.getElementById("ammar").innerHTML = `<h1>${result2} </h1>`;

//TODO>> 3)reduce()
//* to sum all numbers
//* reduce takes in a function as an argument
const nums2 = [1, 2, 3, 4];
const result = nums2.reduce((prev, curr) => prev + curr, 0);
console.log(result);
console.log(members.reduce((prev, curr) => prev + curr.salary, 0));

//! reduce() with function
const multiply = (a, b) => a * b;
console.log(nums2.reduce(multiply, 2));
