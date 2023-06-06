/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */

const getDistanceBetweenPoints = (x1, y1, x2, y2) =>
  ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
