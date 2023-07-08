// 2D array An array of arrays 
let vegetables = ["apples", "oranges", "bananas"];
let fruits = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [vegetables, fruits, meats];

groceryList[1][1] = "ORION";

for (let list of groceryList) {
  for (let foods of list) {
    console.log(foods);
  }
}