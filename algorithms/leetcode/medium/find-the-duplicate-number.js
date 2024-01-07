/* 
Given an array of integers nums containing n + 1 integers 
where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying 
the array nums and uses only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const uniqNumber = [...new Set(nums)];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== uniqNumber[i]) {
      return nums[i];
    }
  }
};

// better solution:
var findDuplicate = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return -1;
};
