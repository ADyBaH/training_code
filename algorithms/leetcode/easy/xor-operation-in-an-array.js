/* 
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.
*/

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  return Array.from({ length: n }, (_, i) => start + 2 * i).reduce(
    (acc, number) => (acc ^= number),
    0
  );
};
