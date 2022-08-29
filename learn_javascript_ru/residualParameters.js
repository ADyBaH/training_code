"use strict"
function sum(...n) {
  return n.reduce((a,b) => a + b, 0);
}

console.log(sum(1,3,6));