let width = window.prompt("Enter the width");
let hight = window.prompt("Enter the hight");

let area = getArea(width, hight);

console.log("Ara of the rectangle is", area);
// window.prompt("Area of the rectangle is", area)

function getArea(width, hight) {
  let result = width * hight;
  return result;
}