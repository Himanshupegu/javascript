/*Rest parameters =  represents an indefinite number of parameters
                      (packs arguments into an array)
*/

let a = 2;
let b = 5;
let c = 7;
let d = 20;

/*
console.log(sum(a, b, c, d));
function sum(a, b) {
  return a + b;
}
function sum(a, b, c) {
  return a + b + c;
}
function sum(a, b, c, d) {
  return a + b + c + d;
}
*/

console.log(sum(a, b, c, d));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}