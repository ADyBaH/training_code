/*
 * Creates an array of integers from the specified start to end (inclusive)

 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
  const arrayLength = end - start;
  const arr = Array.from({ length: arrayLength + 1 }, (fromValue, fromIndex) => {
    const arrayFrom = start + fromIndex;
    return arrayFrom;
  });
  return arr;
}