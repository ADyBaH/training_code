/* 
You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is 
the number of pairs that are formed and answer[1] is the 
number of leftover integers in nums after doing the operation as many times as possible.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  if (nums.length === 1) {
    return [0, 1];
  }

  let countCouples = 0;
  let index = 0;

  while (index < nums.length) {
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[index] === nums[i]) {
        countCouples += 1;
        nums.splice(index, 1);
        nums.splice(i - 1, 1);
        index -= 1;
      }
    }
    index += 1;
  }

  return [countCouples, nums.length];
};
