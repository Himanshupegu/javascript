// inheritance = a child class can inherit all the methods and properties from another class

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

const fish = new Fish();
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

const rabbit = new Rabbit();
console.log(rabbit.alive)
rabbit.eat();
rabbit.sleep();
rabbit.run();