// This can be written by using map method

// let number = [1, 5, 6, 8, 2,]
// let squares = []

// number.forEach(square);
// squares.forEach(print);

// function square(element) {
//   newElement = Math.pow(element, 2)
//   squares.push(newElement)
// }

// function print(element) {
//   console.log(element)
// }

// Using map method

let number = [1, 5, 6, 8, 2,]
let squares = number.map(square);
squares.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function print(element) {
  console.log(element);
}