/* 
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. 
If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. 
If there is no such element, rightSum[i] = 0.
Return the array answer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const leftSum = [0]
  const rightSum = [0]
  let counter = 0

  while(counter < nums.length - 1) {
    leftSum.push(nums[counter] + leftSum[counter])
    console.log(nums[counter] + leftSum[counter])
    counter += 1
    console.log(nums[nums.length - counter] + rightSum[0])
    rightSum.unshift(nums[nums.length - counter] + rightSum[0])
  }

  return leftSum.map((number, index) => Math.abs(number - rightSum[index]))
};
