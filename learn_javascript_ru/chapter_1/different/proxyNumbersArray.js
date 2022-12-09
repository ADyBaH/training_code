let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val === "number") {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1);
numbers.push(2);

console.log("Длина массива: " + numbers.length);

numbers.push("test");

console.log("Этот код не сработает из за ошибки выше.");
