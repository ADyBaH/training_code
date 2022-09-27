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
    this.power = power;
    console.log(`Создана кофеварка, мощностью: ${power}`);
  }
}

let coffeMachine = new CoffeMachine(100);

coffeMachine.waterAmount = -10;
