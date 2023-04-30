/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */

const getIntervalArray = (start, end) => Array.from({length: end - start + 1}).map((_, i) => i + start);

/*
  old solution
  function getIntervalArray(start, end) {
    const arrayLength = end - start;
    const arr = Array.from({ length: arrayLength + 1 }, (fromValue, fromIndex) => {
      const arrayFrom = start + fromIndex;
      return arrayFrom;
    });
    return arr;
  }
*/