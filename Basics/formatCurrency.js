/*
toLocalString() = returns a string with a language
                  sensitive representation of this number

number.toLocalString(local,{options});

'local' = specify that language (undefined = default set in browser)
'options' = object with formatting options
*/

let myNum = 5999999.99;

// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");

// myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" };
// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" };

// myNum = myNum.toLocaleString(undefined, { style: "percent" });
myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" })

console.log(myNum);