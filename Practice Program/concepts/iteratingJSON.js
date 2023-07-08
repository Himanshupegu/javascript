var whichDay = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday"
}

//! Method 1: .entries()
//? We can use Object.entries() to convert a JSON array to an iterable array of keys and values.
//? Object.entries(obj) will return an iterable multidimensional array.

// for (let [key, value] of Object.entries(whichDay)) {
//   console.log(key, value);
// }

// ! Method 2: .keys()
// ? Similarly, Object.keys(obj) returns an iterable list of keys.
// ? Object.getOwnPropertyNames() is another way to access an object’s keys.
// ? It’s essentially the same as Object.keys().

// Object.keys(whichDay).forEach(key => {
//   let value = whichDay[key];
//   console.log(key, value);
// });


//! Method 3: .values()

//? Object.values(obj) returns an iterable list of values.
//? In this instance, we won’t have access to the key associated with each value.

// Object.values(whichDay).forEach(value => {
//   console.log(value);
// });



//! Method 4: for … in
//? for … in (method 4) method is the fastest method for iterating through a JSON object.
// for (let key in whichDay) {
//   let value = whichDay[key];
//   console.log(key, value);
// }




