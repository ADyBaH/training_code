/* 
Given an array of strings patterns and a string word, 
return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
*/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  return patterns.reduce(
    (acc, char) => (word.includes(char) ? ((acc += 1), acc) : acc),
    0
  );
};
