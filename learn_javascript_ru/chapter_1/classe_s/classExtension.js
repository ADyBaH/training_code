class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные мектоды массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr.isEmpty());  // Error: filteredArr.isEmpty is not a function