// super = Refers to the parent class.
//          Commonly used to invoke constructor of a parent class

class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {

  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {

  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}

const rabbit = new Rabbit("ruru", 5, 50);
const fish = new Fish("fifi", 2, 20);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);