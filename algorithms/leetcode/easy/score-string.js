/* 
You are given a string s.
The score of a string is defined as the sum of the absolute difference 
between the ASCII values of adjacent characters.

Return the score of s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let countResult = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== s[i + 1] && s[i + 1]) {
      countResult += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
    }
  }

  return countResult;
};
