//array.reduce() = reduces an array to a single value

// let price = [10, 35, 75, 25, 40];
let price = [1,2]

// let total = price.reduce(checkOut);
// console.log(`The total price is $${total}`);

var reduce = function(price, init) {
  var val = init + price.reduceRight(checkOut)
  return val
};

function checkOut(total, element) {
  return total - element;
}

// function print(total, element, next){
//   console.log(total, element, next);
// }

console.log(reduce(price, 0));