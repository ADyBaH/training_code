/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i],
nums[2*i+1]] (with i >= 0). For each such pair,
there are freq elements with value val concatenated in a sublist.
Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    result.push(...new Array(nums[i]).fill(nums[i + 1]));
  }

  return result;
};
