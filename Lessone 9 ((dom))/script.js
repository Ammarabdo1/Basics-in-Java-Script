//? how to hold elements from html to js file

//TODO>> getElementById && show the innerText for him
text = document.getElementById('app')
console.log(`before ${text.innerText}`)

//! Write in the html file
text.innerText = 'hi my sone'
console.log(`after ${text.innerText}`)

//! update the data in html file (replace h1 for p) 
let message = 'Goodbye my lover!'
text.innerHTML = `<p>${message}</p>`

//! change style without css file
text.style.color = 'white'
text.style.backgroundColor='gray'

//TODO>> querySelectorAll to hold any group of ['class' , 'id' ,'element']
const squares = document.querySelectorAll('.button')
console.log(squares)
console.log(squares[0].value)

//! Function to increase the object value && and insert in button
const timesClicked = {'red': 0 , 'yellow': 0 ,'green': 0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value]++
        square.innerText = timesClicked[square.value]
    }
})

//! function to Clear all value in buttons
const clearScores = () => {
    squares.forEach(square =>{ 
        square.innerText = timesClicked[square.value] = null
    })
}
const clearGameBtn = document.getElementById('clear_game')
clearGameBtn.onclick = () => clearScores()