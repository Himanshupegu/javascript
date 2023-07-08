var numbers = [3, 56, 2, 48, 5];

//! Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double)

//?Easy way
// const newNumbers = numbers.map(function (x) {
//   return x * 2
// })

//! using forEach 
// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

//!Filter - Create a new array by keeping the items that return true.

//?Easy way
// const newNumbers = numbers.filter(function (x) {
//   return x < 15;
// })

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })


//!Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

console.log(newNumbers)

