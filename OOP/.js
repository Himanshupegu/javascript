// setTimeout = invokes a function after a number of milliseconds
//              asynchronous function(doesn't pause execution)

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 9000);
let timer3 = setTimeout(thirdMessage, 10000);

function firstMessage() {
  alert(`Buy this course for $99`);
}
function secondMessage() {
  alert(`This is not a SCAM!!`)
}
function thirdMessage() {
  alert(`DO IT!`);
}

document.getElementById("myBtn").onclick = function () {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);

  alert(`Thinks for buying`)
}