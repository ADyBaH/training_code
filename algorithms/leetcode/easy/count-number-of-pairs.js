/* 
Given an integer array nums and an integer k,
return the number of pairs (i, j)
where i < j such that |nums[i] - nums[j]| == k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] - nums[j] === k) {
        count += 1;
      }
    }
  }

  return count;
};
