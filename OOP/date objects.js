// The Date object is used to work with dates & times

let date = new Date();
// let date = new Date(2024, 4, 2, 1, 30, 69);

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();


// date.setFullYear(2050);
// console.log(date);

// date = date.toLocaleString();
document.getElementById("date").innerHTML = formatDate(date);
document.getElementById("time").innerHTML = formatTime(date);

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${day}/${month}/${year}`;
}

function formatTime(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ms = date.getMilliseconds();

  return `${hour}:${minutes}:${seconds}:${ms}`;
}