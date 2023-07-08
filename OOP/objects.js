// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use.to access properties/methods

const car = {
  // Properties
  model: "Mustang",
  color: "red",
  year: 2022,

  // methods
  drive: function () {
    console.log("You drive the car");
  },
  brake: function () {
    console.log("Sorry! your brake is not working :'(");
  }
}

console.log(car.model);
console.log(car.color);