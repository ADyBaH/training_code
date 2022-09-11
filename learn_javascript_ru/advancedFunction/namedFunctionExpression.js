'use strict'
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}.`);
  } else {
    func("Guets")
  }
}

console.log(sayHi())
console.log(sayHi("Name"))