/**
 * Returns a number of all occurrences of the specified item in an array

 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurrences(arr, item) {
  return arr.reduce((acc, v) => v === item ? acc+= 1 : acc, 0);
  // Old solution:
  // return arr.reduce((acc, reduceValue) => {
  //   let answer = acc;
  //   if (reduceValue === item) {
  //     answer += 1;
  //   }
  //   return answer;
  // }, 0);
}

console.log(findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1))// => 3
console.log(findAllOccurrences([ 1, 2, 3, 4, 5 ], 0))// => 0
console.log(findAllOccurrences([ 'a','b','c','c' ], 'c'))//=> 2
console.log(findAllOccurrences([ null, undefined, null ], null))// => 2
console.log(findAllOccurrences([ true, 0, 1, 'true' ], true))// => 1