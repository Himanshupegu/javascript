// console.log("Hello World");
// document.getElementById("output").innerHTML = 69;
window.alert("Do you know 6 + 9 is equal to 69");


// ****** USER INPUT *****

// Using Window prompt
// let usernmae = window.prompt("What is your name?");
// console.log(usernmae);

// Using HTML textbox
let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello! " + username
}