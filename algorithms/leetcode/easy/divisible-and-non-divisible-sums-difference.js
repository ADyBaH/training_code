/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let result = 0;
  for (let index = 1; index <= n; index++) {
    if (index % m) {
      result += index;
      continue;
    }
    result -= index;
  }

  return result;
};
