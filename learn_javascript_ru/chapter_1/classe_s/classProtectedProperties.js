class CoffeMachine {
  // Защищённые свойства обычно начинаются с префикса _
  _waterAmount = 0;

  // Можно писать функции вместо сетера setWaterAmount(value)
  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this._waterAmount = value;
  }

  // Можно писать функции вместо гетера getWaterAmount()
  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
    console.log(`Создана кофеварка, мощностью: ${power}`);
  }

  get power() {
    return this._power;
  }
}

let coffeMachine = new CoffeMachine(100);
// свойство power установленно только для чтения и не доступно из вне.
console.log(`Мощность: ${coffeMachine.power}W`);
coffeMachine.power = 25;
console.log(`Мощность: ${coffeMachine.power}W`);
// защищенное свойство выводит ошибку.
coffeMachine.waterAmount = -10;
