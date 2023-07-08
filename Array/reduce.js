//array.reduce() = reduces an array to a single value

let price = [10, 35, 75, 25, 40];

let total = price.reduce(checkOut);
console.log(`The total price is $${total}`);

function checkOut(total, element) {
  return total + element;
}