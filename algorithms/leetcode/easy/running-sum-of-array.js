/* 
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = nums.slice(0, 1);
  const cashArray = nums.slice(0, 1);

  for (let i = 1; i < nums.length; i++) {
    cashArray.push(nums[i]);
    result.push(cashArray.reduce((acc, number) => (acc += number), 0));
  }

  return result;
};
