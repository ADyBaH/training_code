/* 
  Given a 0-indexed integer array nums of length n and an integer target, 
  return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const number = nums[i] + nums[j];
      if (i < j && number < target) {
        count += 1;
      }
    }
  }

  return count;
};
