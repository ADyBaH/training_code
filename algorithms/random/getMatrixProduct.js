/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const answer = [];
  for (let i = 0; i < m1.length; i += 1) {
    const arrG = [];
    for (let j = 0; j < m1[i].length; j += 1) {
      const countValue = m1[i].reduce((acc, v, r) => acc + m1[i][r] * m2[r][j], 0);
      if (Math.abs(countValue) > 0) {
        arrG.push(m1[i].reduce((acc, v, r) => acc + m1[i][r] * m2[r][j], 0));
      }
    }
    answer.push(arrG);
  }

  return answer;
}
