//! Asynchronous

//? Synchronous code = In an ordered sequence. step-by-step linear instructions (start now, finish now)

//? Asynchronous code = Out of sequence. Ex.Access a database, Fetch a file,   Tasks that take time (start now, finish sometime later)

console.log("Start");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("End");
