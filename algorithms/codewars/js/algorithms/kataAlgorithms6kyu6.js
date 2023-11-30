/* 
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. 
*/

/**
 * Counts the occurrences of each character in a given string and returns an object with the counts.
 *
 * @param {string} string - The input string to count the characters in.
 * @return {object} An object with the counts of each character in the input string.
 */
const count = (string) =>
  string
    .split("")
    .reduce(
      (acc, value) =>
        acc[value]
          ? ((acc[value] = acc[value] + 1), acc)
          : ((acc[value] = 1), acc),
      {}
    );
