// Given two integers num1 and num2, return the sum of the two integers.

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function (...args) {
  return args.reduce((acc, number) => (acc += number));
};
