/* 
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 
3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers. 
*/

/**
 * Generates a string of numbered sheep sounds.
 *
 * @param {number} num - The number of sheep to generate sounds for.
 * @return {string} - The string of numbered sheep sounds.
 */
const countSheep = (num) =>
  Array.from({ length: num }, (_, index) => `${index + 1} sheep...`).join(" ");
