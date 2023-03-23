// How i decided https://www.codewars.com/kata/javascript-mathematician
'use strict'
function calculate(...arg1) {
  arg1 = arg1.reduce((sum, current) => sum + current, 0)
  return function(...arg2) {
    arg2 = arg2.reduce((sum, current) => sum + current, 0);
    return arg1 + arg2;
  };
}

console.log(calculate(1)(1));
console.log(calculate(1,1)(1));
console.log(calculate(1,1)(1,-1));
console.log(calculate(2,4)(3,7,1),);

// How to decide:
const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);
//just cleaner code