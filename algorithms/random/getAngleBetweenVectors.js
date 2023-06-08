/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
const getAngleBetweenVectors = (x1, y1, x2, y2) =>
  Math.acos(
    x1 * x2 + y1 * y2,
    (x1 ** 2 + y1 ** 2) ** 0.5 + (x2 ** 2 + y2 ** 2) ** 0.5
  );
