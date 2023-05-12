/*
The problem
There is a preloaded class of Person and it needs a new getter and setter. 
Person is defined with a constructor that takes a first name and a last name, 
and provides a mean to get the first name, last name, and full name. 
Bellow is the preloaded class:
*/
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}

Object.defineProperties(Person.prototype, {
  name: {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
    set: function (value) {
      this.firstName = value.split(" ")[0];
      this.lastName = value.split(" ")[1];
    },
  },
});

// let marcusFenix = new Person('Marcus', 'Fenix'),
// augustusCole = new Person('Augustus', 'Cole'),
// damonBaird = new Person('Damon', 'Baird'),
// dominicSantiago = new Person('Dominic', 'Santiago');

// console.log(marcusFenix.name)//, 'Marcus Fenix');
// console.log(augustusCole.name)//, 'Augustus Cole');
// console.log(damonBaird.name)//, 'Damon Baird');
// console.log(dominicSantiago.name)//, 'Dominic Santiago');

// augustusCole.name = 'Cole Train';
// dominicSantiago.name = 'Dom Santiago';

// console.log(augustusCole.getName())//, 'Cole Train');
// console.log(dominicSantiago.getName())//, 'Dom Santiago');

// better solution:
Object.defineProperty(Person.prototype, "name", {
  get: Person.prototype.getName,
  set: function (name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
});
