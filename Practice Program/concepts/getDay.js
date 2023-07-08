var today = new Date()
var currentDay = today.getDay()
var day = ""

const whichDay = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday"
}

for (let [key, value] of Object.entries(whichDay)) {
  if (key == currentDay) {
    day = value
  }
}

// Object.keys(whichDay).forEach(key => {
//   let value = whichDay[key];
//   // console.log(key, value);
//   if (key == currentDay) {
//     day = value
//     console.log("ok")
//   }
// });

console.log(day)