//switch = statement that examines a value for a match against many case clauses. More efficient than many "else if" statement.

let grade = 101;
/*
switch (grade) {
  case "A":
    console.log("You did great");
    break;
  case "B":
    console.log("You did good");
    break;
  case "C":
    console.log("You did ok");
    break;
  case "D":
    console.log("You FAILED!")
    break;
  default:
    console.log(grade, "is not a latter grade!");
}
*/

switch (true) {
  case grade >= 90:
    console.log("You did great");
    break;
  case grade >= 80:
    console.log("You did good");
    break;
  case grade >= 70:
    console.log("You did ok");
    break;
  case grade >= 50:
    console.log("You passed, barely")
    break;
  case grade < 50 && grade >= 0:
    console.log("You FAILED!")
    break;
  default:
    console.log(grade, "is not a latter grade!");
}