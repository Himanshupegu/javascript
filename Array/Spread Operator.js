//? spread operator(...) = allows an iterable such as an
//?                    array or string to be expanded
//?                    in places where zero or more
//?                    arguments are expected
//?                    (unpacks the elements)

let numbers = [19, 22, 12, 4, 55, 9, 69];

// let max = Math.max(...numbers);
// console.log(max);
var argumentsLength = function (...numbers) {
  let num = numbers[0];
  console.log(num);
};
argumentsLength(...numbers);

// let sectionA = ["Abhey", "Bhargav", "Sarbart", "Mustaq", "Ashis"];
// let sectionB = ["Arnab", "Binit", "Himanshu", "Aditya", "Somnath",]

// sectionA.push(...sectionB);

// console.log(sectionA);
// console.log(...sectionA)
