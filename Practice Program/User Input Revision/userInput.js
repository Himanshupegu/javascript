// let username = window.prompt("What is You name?")

// console.log(username)

let username;

document.getElementById("submitBtn").onclick = function () {
  username = document.getElementById("userName").value;
  console.log(username);
  document.getElementById("nameLabel").innerHTML = "Hellow " + username;

  window.alert("Hellow " + username);
}
