/**
 *! Which Method is the Fastest?
 *? We’re going to run each method 10,000,000 times to compare performance at a higher scale.
 *? We’ll be using console.time() to track the time it takes each method to run 10 million times.
*/

let obj = {
  key1: "val1",
  key2: "val2",
  key3: "val3"
}


function runTest(fn, name, n = 10000000) {
  console.time(name);
  for (let i = 0; i < n; i++) { fn(); }
  console.timeEnd(name);
}

function method1_1() {
  for (let [key, value] of Object.entries(obj)) { }
}
function method1_2() {
  Object.entries(obj).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
  });
}
function method1_3() {
  Object.entries(obj).map(entry => {
    let key = entry[0];
    let value = entry[1];
  });
}
function method2() {
  Object.keys(obj).forEach(key => {
    let value = obj[key];
  });
}
function method3() {
  Object.values(obj).forEach(value => { });
}
function method4() {
  for (let key in obj) {
    let value = obj[key];
  }
}

runTest(method1_1, "Method 1.1")
runTest(method1_2, "Method 1.2")
runTest(method1_3, "Method 1.3")
runTest(method2, "Method 2")
runTest(method3, "Method 3")
runTest(method4, "Method 4")

//! for … in (method 4) method is the fastest method for iterating through a JSON object.
