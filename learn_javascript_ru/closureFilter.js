/* Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве. */
'use strict'
let arr = [1, 2, 3, 4, 5, 6, 7];


function inBetween(one, two) {
    return function(x) {
      return x >= one && x <= two
    }
};
function inArray(arr) {
  return function(x) {
    return arr.includes(x)
  }
}

console.log( arr.filter(inBetween(3,6)) );
console.log( arr.filter(inArray([1, 2, 10])));