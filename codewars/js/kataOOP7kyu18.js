// Get Coding :)

// class Shark extends Animal {
//   constructor(/* Insert your parameters here */) {
//     super(/* Make a call to the parent class's constructor with the correct arguments */);
//   }
// }

// class Cat extends Animal {
//   // Do the same here as you did for Shark - define your constructor function and any other methods you need
// }

// class Dog extends Animal {
//   // On your own now - you can do it :D
// }

class Shark extends Animal {
  constructor(name, age,status , species, legs) {
    super(legs, species, status);
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.species = 'shark';
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status, species) {
    super(name, age, species)
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = 'cat';
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super()
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}