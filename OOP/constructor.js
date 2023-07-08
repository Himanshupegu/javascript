// constructor = a special method of a class,
//               accepts arguments and assign properties


class Student {
  //Constructor
  constructor(name, age, cgpa) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
  }

  study() {
    console.log(`${this.name} is studying`);
  }

}

const student1 = new Student("Halfnil", 21, 8.6);
console.log(`Name: ${student1.name}`);
console.log(`Age: ${student1.age}`);
console.log(`CGPA: ${student1.cgpa}`);
student1.study();

const student2 = new Student("Hemanga36", 21, 8.8);
console.log(`Name: ${student2.name}`);
console.log(`Age: ${student2.age}`);
console.log(`CGPA: ${student2.cgpa}`);
student2.study();

