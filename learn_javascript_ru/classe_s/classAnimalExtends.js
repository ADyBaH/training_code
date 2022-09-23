class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

let animal = new Animal("Мой питомец");


class Rabbit extends Animal{

  constructor(name, earLength){
    // Перед переопределением конструктора нужно вызвать super перед this.
    super(name);
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name} прячется.`);
  }

  stop() {
    // У стрелочных функций нет своего Super, отчего он его берет его из внешнего окружения.
    setTimeout(() => super.stop(), 1000); 
    this.hide();
  }
}

let rabbit = new Rabbit("Белый кролик", 10);

console.log(rabbit.name)
console.log(rabbit.earLength)
rabbit.run(5)
// rabbit.stop()