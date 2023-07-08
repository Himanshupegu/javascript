// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it

/*
function sayHello() {
  console.log("Hello!!");
}
*/

const sayHello = function () {
  console.log("Hello!!");
}
sayHello();