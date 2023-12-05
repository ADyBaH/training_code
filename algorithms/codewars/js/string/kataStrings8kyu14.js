/* 
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

/**
 * Splits a string into an array of words.
 *
 * @param {string} string - The string to be split.
 * @returns {string[]} - An array of words.
 */
const stringToArray = (string) => string.split(" ");
