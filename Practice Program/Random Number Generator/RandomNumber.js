let x;
let y;
let z;

document.getElementById("rollBtn").onclick = function(){
  x = Math.floor(Math.random() * 6)+1;
  y = Math.floor(Math.random() * 6) +1;
  z = Math.floor(Math.random() * 6)+1;

  document.getElementById("random1").innerHTML = x;
  document.getElementById("random2").innerHTML = y;
  document.getElementById("random3").innerHTML = z;

  // console.log(x);
}