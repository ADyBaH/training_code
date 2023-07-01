/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */

const getIdentityMatrix = (n) =>
  new Array(n).fill(new Array(n)).map((value, index) =>
    Array.from(value, (_, fromIndex) => {
      if (fromIndex === index) {
        return 1;
      }
      return 0;
    })
  );