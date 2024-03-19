/*
Given an array of positive integers arr, 
return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.
*/

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a.at(-1) - b.at(-1))
    .join(" ")
    .replace(/\d/g, "");
};
