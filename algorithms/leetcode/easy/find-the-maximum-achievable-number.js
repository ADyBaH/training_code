/*
You are given two integers, num and t.

An integer x is called achievable if it can become equal to num 
after applying the following operation no more than t times:

Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
Return the maximum possible achievable number. 
It can be proven that there exists at least one achievable number.
*/

/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
  return num + t * 2;
};
