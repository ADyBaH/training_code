/* 
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
*/

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  let result = n;

  while (result % 2 || result % n) {
    result += 1;
  }

  // better solution return n % 2 === 0 ? n : n*2
  return result;
};
