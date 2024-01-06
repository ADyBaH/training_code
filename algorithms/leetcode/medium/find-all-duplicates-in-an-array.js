/* 
Given an integer array nums of length n where all the 
integers of nums are in the range [1, n] and each integer appears once or twice, 
return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const uniqNumber = new Set();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (uniqNumber.has(number)) {
      result.push(number);
      continue;
    }
    uniqNumber.add(number);
  }

  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
