/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
const getFalsyValuesCount = (arr) => arr.filter((v) => !v).length;

// console.log(getFalsyValuesCount([]));// => 0
// console.log(getFalsyValuesCount([ 1, '', 3 ]));// => 1
// console.log(getFalsyValuesCount([ -1, 'false', null, 0 ]));// => 2
// console.log(getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]));//  => 6
/*
old solution:
  function getFalsyValuesCount(arr) {
    // throw new Error('Not implemented');
    return arr.reduce((acc, value) => {
      let answer = acc;
      if (!value) {
        answer += 1;
      }
      return answer;
    }, 0);
  }
*/