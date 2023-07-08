let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  c = Math.round(c);
  document.getElementById("sideC").innerHTML = "Side C = " +c;
}