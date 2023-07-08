// Arrow function expression(=>) = compact alternative to a traditional function expression

// const percent = function (x, y) {
//   return x / y * 100;
// }

const percent = (x, y) => x / y * 100;

// console.log(`${percent(350, 500)}%`)



let userName = "Lakhya"
// const greeting = function (userName) {
//   console.log(`Hello ${userName}`);
// }

const greeting = (userName) => {
  console.log(`Hello ${userName}`);
  console.log("Darling!!")
}
greeting(userName);

//sortAnArrayOfNumbers using arrow function expression

// let marks = [60, 76, 66, 80, 50, 35];

// marks.sort((x, y) => y - x);
// marks.forEach((element) => console.log(element));
// function descendingOrder(x, y) {
//   return y - x;
// }

// function print(element) {
//   console.log(element);
// }