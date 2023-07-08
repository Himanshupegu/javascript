const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function () {
  let userInput = document.getElementById("userInput").value;
  guesses++;

  if (userInput == answer) {
    alert(`${answer} is the number. It took you ${guesses} guesses.`);
  }
  else if (userInput > answer) {
    alert(`Too large!`);
  }
  else {
    alert(`Too small!`)
  }
}