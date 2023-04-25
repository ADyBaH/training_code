/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  return new Array(n)
    .fill(0)
    .map((_, i) => i)
    .reduce((acc = 0, _, i, arr) => ((arr.length + 1) % i === 0) ? acc += 1 : acc) > 1;
}
/*
  old solution:
  const answer = [];
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) answer.push(i);
  }
  return answer.length <= 0;
*/
