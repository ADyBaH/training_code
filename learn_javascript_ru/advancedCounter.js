'use strict'
function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;

  return counter;
}
let counter = makeCounter();

console.log( counter() )
console.log( counter() )
console.log( counter.set(0) )
console.log( counter.decrease() )