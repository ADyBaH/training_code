/* 
Given a positive integer num represented as a string,
 return the integer num without trailing zeros as a string.
*/

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  while (num.endsWith("0")) {
    num = num.slice(0, -1);
  }

  return num;
};
