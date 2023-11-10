//! Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

//? Solution 1

var TimeLimitedCache = function() {
  this.cache= {}
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if(this.cache[key] && this.cache[key].timer){
      clearTimeout(this.cache[key].timer);
      this.cache[key].value = value
      this.cache[key].timer = setTimeout(() => {
          this.remove(key)
      }, duration)
      return true
  } else {
      this.cache[key] = {
          value: value,
          timer: setTimeout(() => {
              this.remove(key)
          }, duration)
      }
      return false
  }
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if (this.cache[key] && this.cache[key].timer){
      return this.cache[key].value
  }else {
      return -1
  }
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  let count = 0
  for (const key in this.cache){
      if(this.cache[key].timer){
          count++
      }
  }
  return count
};

TimeLimitedCache.prototype.remove = function(key) {
delete this.cache[key];
};

/**
* Your TimeLimitedCache object will be instantiated and called as such:
* var obj = new TimeLimitedCache()
* obj.set(1, 42, 1000); // false
* obj.get(1) // 42
* obj.count() // 1
*/

//? Solution 2

// const TimeLimitedCache = function() {
//   this.cache = new Map();  // Using Map so we don't need a size variable
// };

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//   let found = this.cache.has(key);
//   if (found) clearTimeout(this.cache.get(key).ref);  // Cancel previous timeout
//   this.cache.set(key, {
//       value,  // Equivalent to `value: value`
//       ref: setTimeout(() => this.cache.delete(key), duration)
//   });
//   return found;
// };

// TimeLimitedCache.prototype.get = function(key) {
//   return this.cache.has(key) ? this.cache.get(key).value : -1;
// };

// TimeLimitedCache.prototype.count = function() {
//   return this.cache.size;
// };