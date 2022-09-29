// Приватное свойство «#waterLimit»
/* Новая возможность
Эта возможность была добавлена в язык недавно. В движках JavaScript пока не
поддерживается или поддерживается частично, нужен полифил */

class CoffeeMachine {

  #waterAmount = 0;


  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this.#waterAmount = value;
  }
  
}

let machine = new CoffeeMachine();

// Мы можем писать в приватное свойство, но не можем читать его.
machine.waterAmount = -10;
// Но мы не можем прочитать приватное свойство:
console.log(machine.waterAmount)