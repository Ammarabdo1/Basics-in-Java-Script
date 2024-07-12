//? Objects {} Create && Access

//TODO>> 1)Create object
const person = {
    name: 'ammar',
    age: 23,
    id: 22071,
  }
  console.log(person)
  
  //TODO>> 2)Access object: dot notation vs bracket notation
  //! Access with dot notation
  console.log(person.name)
  //! Access with bracket notation
  console.log(person['name'])
  
  //TODO>> APP to introduction your self
  const introducer = (name) => {
    const person = {
      name: name,
      age: 10+Math.floor(Math.random()*30),
      id: 10000+Math.ceil(Math.random()*1000),
      salary: function () {
        return Math.floor(Math.random()*10000) + this.id
      },
    }
    const intro = `Hi, my name is ${person.name} \nI have: ${person.age} years old \nid is: ${person.id} \nand salary is: ${person.salary()} $`
    return intro 
  }
  
  const intro = introducer(prompt('Enter your name'))
  console.log(intro)