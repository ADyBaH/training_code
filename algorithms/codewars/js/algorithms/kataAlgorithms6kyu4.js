/* 
Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: 
brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

/**
 * Removes valid braces from a given string until no more valid braces are present.
 *
 * @param {string} braces - The input string containing braces.
 * @return {boolean} Returns true if all braces are valid and balanced, false otherwise.
 */
function validBraces(braces) {
  let bracesLength = 0;
  // Or while(/\(\)|\[\]|\{\}/g.test(braces))
  while (bracesLength !== braces.length) {
    bracesLength = braces.length;
    braces = braces.replace(/(\(\)|\[\]|\{\})/g, "");
  }

  // Better !braces.length
  return braces.length <= 0;
}
