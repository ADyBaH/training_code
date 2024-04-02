/* 
An integer divisible by the sum of its digits is said to be a Harshad number.
You are given an integer x. Return the sum of the digits of x if x is a Harshad number,
otherwise, return -1.
*/

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const result = String(x)
    .split("")
    .reduce((acc, number) => (acc += +number), 0);
  return x % result ? -1 : result;
};

console.log(sumOfTheDigitsOfHarshadNumber(23));
