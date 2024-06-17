/* 
  Given three integer arrays nums1, nums2, and nums3,
  return a distinct array containing all the values
  that are present in at least two out of the three arrays.
  You may return the values in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const answer = [];

  for (const number of new Set(nums1.concat(nums2, nums3))) {
    if (
      (nums1.includes(number) && nums2.includes(number)) ||
      (nums2.includes(number) && nums3.includes(number)) ||
      (nums1.includes(number) && nums3.includes(number))
    ) {
      answer.push(number);
    }
  }

  return answer;
};
