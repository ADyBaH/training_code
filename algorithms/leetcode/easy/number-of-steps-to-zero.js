/* 
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2,
otherwise, you have to subtract 1 from it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let result = 0;
  let number = num;

  while (number) {
    result += 1;
    number = number % 2 === 0 ? number / 2 : number - 1;
  }

  return result;
};
