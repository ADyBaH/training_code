/* 
Write function RemoveExclamationMarks 
which removes all exclamation marks from a given string.
*/

/**
 * Removes all exclamation marks from a string.
 * @param {string} s - The input string.
 * @returns {string} - The string with exclamation marks removed.
 */
const removeExclamationMarks = (s) => s.replace(/!/g, "");
