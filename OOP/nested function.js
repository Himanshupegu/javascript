// Nested function = Functions inside other functions.
//                   Outer functions have access to inner functions.
//                   Inner functions are"hidden"from outside the outer function.
//                   used in closures(future video topic)

let userName = "Himanshu Pegu";
let userInbox = 0;

// displayUserName(userName);
login();

function login() {
  displayUserName();
  displayInbox();
  
  function displayUserName() {
    console.log(`Welcome ${userName}`);
  }
  function displayInbox() {
    console.log(`You have ${userInbox} new massages`);
  }
}