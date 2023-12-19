/* 
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of 
symbols that reads the same backwards as forwards, such as madam or racecar.
*/

/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (string) =>
  string.toLowerCase().split("").reverse().join("") === string.toLowerCase();
