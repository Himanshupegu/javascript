document.getElementById("submitBtn").onclick = function () {
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  const male = document.getElementById("male");
  const female = document.getElementById("female");
  if (yes.checked) {
    console.log("Ok, you are not an alien.");
  }
  else if (no.checked) {
    console.log("You are an alien? Wait, I'm calling police.")
  }
  else {
    console.log("I don't care");
  }
  if (male.checked) {
    console.log("Hi Bro!");
  }
  else if (female.checked) {
    console.log("Hi");
  }
  else {
    console.log("Sorry! I have not provided option for other genders!!");
  }
}