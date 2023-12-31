//! Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.

// promise resolves:
//? When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.

// promise rejects:
//? When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

// Please solve it without using the built-in Promise.all function.

var promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
      // We know the resulting array will be the same length as functions
      const results = new Array(functions.length);
      let count = 0;
      functions.forEach((fn, i) => {
          fn()
          .then(val => {
              results[i] = val;
              count++;
              if(count === functions.length) resolve(results);
          })
          .catch(reason => reject(reason));
      });
  });
};