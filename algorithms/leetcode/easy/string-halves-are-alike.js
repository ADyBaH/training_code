/* 
You are given a string s of even length. Split this string into two halves of equal lengths,
and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels 
('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). 
Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/

const characterArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.length / 2 > i && characterArray.includes(s[i])) {
      leftCount += 1;
    }
    if (s.length / 2 <= i && characterArray.includes(s[i])) {
      rightCount += 1;
    }
  }

  return leftCount === rightCount;
};
