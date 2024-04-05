/* 
Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let count = 0;

  for (let i = 0; i <= (a + b) / 2; i += 1) {
    if (a % i === 0 && b % i === 0) {
      count += 1;
    }
  }
  return count;
};
