/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

/**
 * Sums up an array of numbers.
 * @param {number[]} x - The array of numbers to sum up.
 * @returns {number} - The sum of the numbers.
 */
const sumMix = (x) => x.reduce((a, b) => +a + +b, 0);
