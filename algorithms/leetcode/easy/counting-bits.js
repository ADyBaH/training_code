/* 
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
ans[i] is the number of 1's in the binary representation of i.
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const resultArray = [];

  for (let i = 0; i < n + 1; i++) {
    resultArray.push(i.toString(2).replaceAll("0", "").length);
  }

  return resultArray;
};
