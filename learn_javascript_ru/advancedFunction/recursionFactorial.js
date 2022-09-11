// Задача – написать функцию factorial(n) , которая возвращает n! , используя рекурсию.
"use strict"
function factorial(n) {
  return (n !== 0 ) ? n * factorial(n - 1): 1;
}

console.log( factorial(5) )