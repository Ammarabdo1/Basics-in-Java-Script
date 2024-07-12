//? loops 
//TODO>> 1)for loop
const fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🥭', '🍊', '🍐', '🍌', '🍎', '🍊', ]
for (let i = 0 ; i < fruits.length ; i++){
  console.log(fruits[i])
}

//TODO>> 2)for .. of  loop to hold the value
const numbers = [1,2,3,4,5,6,7,8,9,10]
for(const number of numbers){
  console.log(number)
}

//TODO>> 3)for .. in  loop to hold the index
for(const index in numbers){
  console.log(index)
  console.log(numbers[index])
}

//TODO>> 4)forEach with dynamic loop
//* App for calculate the double of numbers
const double = (numbers) => {
  const result =[]
  numbers.forEach(number => result.push(number*2))
  return result
}
console.log(double(numbers))

//* App for calculate the square of numbers
const square = (numbers) => {
  const result =[]
  numbers.forEach(number => result.push(number**2))
  return result
}
console.log(square(numbers))

