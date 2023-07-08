// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["T-shirt", 20],
  ["Jeans", 30],
  ["Socks", 10],
  ["Underwear", 50]
]);

let shoppingCard = 0
//--> get method
// shoppingCard += store.get("T-shirt");
// shoppingCard += store.get("Underwear");
// console.log(shoppingCard);

// --> set method
// store.set("Hat", 40);
// store.delete("Hat");

// --> has method
// console.log(store.has("Jeans"))

console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));