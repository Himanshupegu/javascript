document.getElementById("submitBtn").onclick = function () {
  let temp;
  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("userInput").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("output").innerHTML = temp + "°C";
  }
  else if (document.getElementById("fButton").checked) {
    temp = document.getElementById("userInput").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("output").innerHTML = temp + "°F";
  }
  else {
    document.getElementById("output").innerHTML = "Select a unit"
  }
}

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}