// array.map() = executes a provided callback function once for each array element AND creates a new array

let numbers = [2, 5, 8, 9, 10];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// squares.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// function print(element) {
//   console.log(element);
// }

// Using arrow function expressions
let squares = numbers.map((element) => Math.pow(element, 2))

let cubes = numbers.map((element) => Math.pow(element, 3))

console.log("Cubes")
cubes.forEach((element) => console.log(element))
console.log("Squares")
squares.forEach((element) => console.log(element))