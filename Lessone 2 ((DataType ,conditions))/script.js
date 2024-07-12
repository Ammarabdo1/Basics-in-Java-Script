//? data types (strings , numbers)

//todo>> 1) Data types
//! const => The value cannot be changed
//! let => The value can be changed
//! var => The value can be changed (Not Recommended)

//* numbers 👉 1, 5, 10, 100, 2.5
//* strings 👉 'hello', "what is up"
//* arrays 👉 []
//* objects 👉 {}
//* boolean 👉 true / false (EX:banks)

//todo>> 2) Math Methods
//! floor - Rounds down
console.log(Math.floor(2.23523))

//! ceil - Rounds up
console.log(Math.ceil(2.23523))

//! random - gives you number between 0 and 1
console.log(Math.random())

console.log(Math.floor( Math.random()*10) )

//todo>> 3) conditional operators
//* ==, ===, >, <, <=, >=, !=, !==

//todo>> 4) logic operators
//* && , ||

//todo>> weather app (conditionals)
//* weather app (conditionals)
//* if rain 👉 'Grab your umbrella ☔'
//* else 👉 'Wear your sunglasses 😎🕶'
let weather = prompt('How is the weather?')
if (weather == 'rainy')
  console.log("Grab your umbrella ☔")
else if (weather == 'sunny')
  console.log("Wear your sunglasses 😎")
else
  console.log("Enter : rainy or sunny")
