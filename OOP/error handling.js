// error = object with a description of something went wrong

//         * Can't open a file
//         * Lose connection
//         * User types incorrect input
//         * TypeError


// console.lag()

// try {
//   console.lag();
// }
// catch (error) {
//   console.log(error);
// }

// throw = executes a user-defined error

try {
  let x = window.prompt("Enter a #");
  x = Number(x);

  if (isNaN(x)) throw "That wasn't a number!!";
  if (x == "") throw "Please enter a number";
  if (x == 69) throw "That is my favorite number;)"

  console.log(`${x} is a number`);
}
catch (error) {
  console.log(error);
}

finally {
  console.log("This always executes");
}