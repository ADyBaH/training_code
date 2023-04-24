/**
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
const get3TopItems = (arr) => arr.slice(-3).reverse();
/*
  old solution:
  return arr.filter((value, index, ar) => {
    if (index < ar.length - 3) {
      return false;
    }
    return true;
  }).reverse();
*/


console.log(get3TopItems([]));
console.log(get3TopItems([ 1, 2 ]));
console.log(get3TopItems([ 1,2,3,4,5,6,7,8,9,10 ]));