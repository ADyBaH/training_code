/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
const generateOdds = (len) => new Array(len).fill().map((_, e) => e + 1 + e);

/*
  old solution:
  function generateOdds(len) {
    const answer = new Array(len);
    return answer.fill().map((a, e) => e + 1 + e);
  }
*/
