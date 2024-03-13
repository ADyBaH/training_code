/* 
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters,
return true if sentence is a pangram, or false otherwise.
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  // better return new Set(sentence).size===26
  const alphabet = new Set();

  for (let i = 0; i < sentence.length; i++) {
    alphabet.add(sentence[i].toLowerCase());
  }

  return alphabet.size === 26;
};
