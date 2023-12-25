/* 
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

/**
 * Check if a string contains only alphanumeric characters.
 *
 * @param {string} string - The string to be checked.
 * @returns {boolean} - True if the string contains only alphanumeric characters, false otherwise.
 */
function alphanumeric(string) {
  // better /^[a-z\d]+$/i.test(s);
  return (
    Boolean(string) &&
    !new RegExp(/[\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{1}/).test(string)
  );
}
