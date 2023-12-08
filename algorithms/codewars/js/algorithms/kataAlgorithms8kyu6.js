/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

/**
 * Generates a reversed sequence of numbers from n to 0.
 *
 * @param {number} n - The starting number.
 * @return {Array} - An array containing the reversed sequence of numbers.
 */
const reverseSeq = (n) => {
  // Array.from({length: n}, (_, index) => n - index)
  const array = [];
  for (let index = n; index >= 0; index -= 1) {
    array.push(index);
  }
  return array;
};
