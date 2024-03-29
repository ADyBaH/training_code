/* 
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an 
uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

/**
 * Generates a wave by capitalizing each letter of the input string, one letter at a time.
 * @param {string} str - The input string.
 * @returns {string[]} - An array of strings representing the wave.
 */
const wave = (str) => {
  const answerArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      answerArray.push(
        `${str.slice(0, i)}${str[i].toUpperCase()}${str.slice(i + 1)}`
      );
    }
  }

  return answerArray;
};
