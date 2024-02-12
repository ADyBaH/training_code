/*
Given n points on a 2D plane where points[i] = [xi, yi], 
Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely 
along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  return points
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, value, index, arr) => {
      const width = arr[index + 1] ? Math.abs(value[0] - arr[index + 1][0]) : 0;
      if (acc < width) {
        acc = width;
      }

      return acc;
    }, 0);
};

console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
);
