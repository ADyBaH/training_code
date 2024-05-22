/* 
  Given two integer arrays nums1 and nums2, return an array of their intersection.
  Each element in the result must be unique and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const answer = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!answer.includes(nums1[i]) && nums2.includes(nums1[i])) {
      answer.push(nums1[i]);
    }
  }

  return answer;
};

// better const intersection = (A, B) => [... new Set(A)].filter(e => B.includes(e));
