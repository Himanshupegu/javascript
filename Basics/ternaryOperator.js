/*ternary operator = Shortcut for an 'if/else statement'
Takes 3 operands
            1. a condition with ?
            2. expression if True :
            3. expression if False
condition ? exprIfTrue : exprIfFalse
*/
/*
Template literals = delimited with (`)
instead of double or single quotes
allows embedded variables and expression.
*/


let userName = "Himanshu";
checkWinner(true, userName);


function checkWinner(win, userName) {
  win ? console.log(`${userName} You win`) : console.log(`${userName} you lose!`);
}