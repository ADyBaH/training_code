/* 
Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/

/**
 * Finds the minimum and maximum values in an array of numbers.
 *
 * @param {Array<number>} numberArray - An array of numbers.
 * @return {Array<number>} An array containing the minimum and maximum values.
 */
const minMax = (numberArray) => [
  Math.min(...numberArray),
  Math.max(...numberArray),
];
