// let userName = "Lakhya jyoti Kouch";
let phoneNumber = "7086-89-0997"

let userName = window.prompt("What is your name? ")

// console.log(userName.length);
// console.log(userName.charAt(7));
// console.log(userName.indexOf("u"));
// console.log(userName.lastIndexOf("u"));
// console.log(userName)
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

// console.log(phoneNumber);

// phoneNumber = phoneNumber.replaceAll("-","/")
// console.log(phoneNumber);

/*
const myArray = userName.split(" ");
document.getElementById("stringMethods").innerHTML = myArray;
console.log(userName.split(" "))
*/




let firstName;
let middleName;
let lastName;
// slice() extracts a  section of a string and returns it as a new string, without modifying the original string

/*
firstName = userName.slice(0,8);
lastName = userName.slice(9);
*/
firstName = userName.slice(0, userName.indexOf(" "));
middleName = userName.slice(userName.indexOf(" ") + 1, userName.lastIndexOf(" "))
lastName = userName.slice(userName.lastIndexOf(" ") + 1);
console.log(firstName);
console.log(middleName);
console.log(lastName);




// method chaining = calling one method after another in one continuous line of code

/*
let letter = userName.charAt(0);
letter = letter.toUpperCase();
*/
/*
let letter = userName.charAt(0).toUpperCase();
console.log(letter);
*/
