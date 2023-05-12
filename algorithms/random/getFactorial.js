/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */

const getFactorial = (n) => n > 1 ? n * getFactorial(n - 1) : 1;


console.log(getFactorial(1))// => 1
console.log(getFactorial(5))// => 120
console.log(getFactorial(10))// => 3628800
/*
old solution:
function getFactorial(n) {
  const newArray = new Array(n).fill(0).map((value, index) => index + 1);
  return newArray.reduce((acc, value) => value * acc, 1);
}
*/