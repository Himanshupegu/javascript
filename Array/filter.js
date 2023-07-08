//array.filter() = creates a new array with all elements
//                 that pass the test provided by a function

let ages = [1, 18, 19, 15, 17, 55, 40, 70, 13];

let adults = ages.filter(checkAge);
adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}