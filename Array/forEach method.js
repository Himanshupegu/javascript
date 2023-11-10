/*array.forEach() = executes a provided callback function once for each array element
*/

//

// let listOfNames = ["Lakhya", "hemanga", "arnab", "dibiya", "somnath", "Udipta"];

// console.log(listOfNames);
// listOfNames.forEach(capitalize);
// listOfNames.forEach(print);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//   console.log(element);
// }
// console.log(listOfNames);

let marks = [60, 76, 66, 80, 50, 35];

marks.forEach(addExtraMarks);
marks.forEach(printUpdatedMarks);

function addExtraMarks(element, index, array) {
  array[index] = element + 10;
}

function printUpdatedMarks(element, index) {
  console.log(element, index);
}
