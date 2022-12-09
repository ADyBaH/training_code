/* Напишите функцию sumTo(n) , которая вычисляет сумму чисел 1 + 2 + ... + n 
Сделайте три варианта решения:
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1 
3. С использованием формулы арифметической прогрессии.
*/

"use strict"
function sumTo1(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log( sumTo1(10000));


function sumTo2(n) {
  if (n < 2) {return n;} 
    return n + sumTo2(n - 1);
}

console.log( sumTo2(10000));


function sumTo3(n) {
  return n * (n + 1) / 2;
}

console.log( sumTo3(1000));