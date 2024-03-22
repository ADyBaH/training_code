/* 
You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.

Consider calculating the following values:

The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
Return an integer array answer of size 2 containing the two values in the above order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var findIntersectionValues = function (nums1, nums2) {
  return [
    nums1.reduce(
      (acc, number) => (nums2.includes(number) ? (acc += 1) : acc),
      0
    ),
    nums2.reduce(
      (acc, number) => (nums1.includes(number) ? (acc += 1) : acc),
      0
    ),
  ];
};
