/* 
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/**
 * Adds two arrays of numbers by concatenating them and summing their elements.
 *
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {number} - The sum of elements from both arrays.
 */
const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((acc, value) => (acc += value), 0);
