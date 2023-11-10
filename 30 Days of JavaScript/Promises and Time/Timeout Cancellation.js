// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

// var cancellable = function(fn, args, t) {
//   // var cancelFn = () => clearTimeout(timer)

//   // return cancelFn
//   return timer
// };
// const args = [2]
// const t = 20

var timer = setTimeout(() => {
  // fn(...args)
  // x = 2
  // const fn = (x) => x * 5
  console.log('hi');
}, 2000);

// console.log(timer);

// var ans = cancellable(fn, args, t)
// console.log(ans);
