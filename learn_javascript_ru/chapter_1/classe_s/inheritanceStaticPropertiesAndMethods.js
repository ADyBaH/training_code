class Animal {

  constructor(name, speed) {
    this.speed = speed;
    this.name =name;
  }

  run(speed = 0) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

let rabbits = [
  new Rabbit("Белый кролик", 10),
  new Rabbit("Черный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run();

// Функция Rabbit прототипно наследует от функции Animal.
console.log(Rabbit.__proto__ === Animal);
// Rabbit.prototype прототипно наследует от Animal.prototype
console.log(Rabbit.prototype.__proto__ === Animal.prototype);