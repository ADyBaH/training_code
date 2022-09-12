'use string'
let obj = {
  get propName() {
    // Геттер, срабатывает при чтении obj.propName
  },

  set propName(value) {
    // Сеттер, страбатывает при записи obj.propName = value
  }
};

// Берем свойства объекта.
let user = {
  name: 'John',
  surname: 'Smith',
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

console.log(user.fullName);

// Переписываем свойства объекта.
let user2 = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ")
  }
};

user2.fullName = "Alice Cooper";
console.log(user2.name);
console.log(user2.surname);

// Условие в сеттере.
let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Короткое имя.");
      return;
    }
    this._name = value;
  }
};

user3.name = 'Pete';
console.log(user3.name);
user3.name = ' ';

// Использование аксессоров для совместимости.
function User (name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}


let john = new User('John', new Date(1992, 6, 1));

console.log(john.age);
console.log(john.birthday);
