/*
You are given a string allowed consisting of distinct characters and an array of strings words.
A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.reduce((acc, word) => {
    const isWordAllowed = word
      .split("")
      .every((letter) => allowed.includes(letter));

    if (isWordAllowed) {
      acc += 1;
    }

    return acc;
  }, 0);
};
