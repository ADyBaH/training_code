/* 
Returns the number of positive numbers from specified array
* example:
*   [ ]          => 0
*   [ -1, 0, 1 ] => 1
*   [ 1, 2, 3]   => 3
*   [ null, 1, 'elephant' ] => 1
*   [ 1, '2' ] => 1
*/
function getPositivesCount(arr) {
  return arr.reduce((acc, v) => (typeof v === "number" &&
    v > 0) ? acc + 1 : acc + 0, 0)
  // last solution:
//  let answer = 0;
//  arr.map((value) => {
//    if (value > 0 && typeof value === 'number') {
//      answer += 1;
//    }
//    return true;
//  });
//  return answer;
}

console.log(getPositivesCount([ ]))//          => 0
console.log(getPositivesCount([ -1, 0, 1 ]))// => 1
console.log(getPositivesCount([ 1, 2, 3]))//   => 3
console.log(getPositivesCount([ null, 1, 'elephant' ]))// => 1
console.log(getPositivesCount([ 1, '2' ]))// => 1