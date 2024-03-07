/* 
Given a string s, return the string after
replacing every uppercase letter with the same lowercase letter.
 */

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let string = "";

  for (let i = 0; i < s.length; i++) {
    string += s[i].toLocaleLowerCase();
  }

  return string;
};
