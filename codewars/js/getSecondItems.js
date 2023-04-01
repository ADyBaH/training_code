/* Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
const getSecondItems = (arr) => arr.filter((_, index) => ((index + 1) % 2 === 0) ? true : false);

const arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]// => [ 2, 4, 6, 8, 10 ]
const arr2 = [ 'a', 'b', 'c' , null ]//  => [ "b", null ]
const arr3 = [ "a" ]// => []

console.log(getSecondItems(arr1))
console.log(getSecondItems(arr2))
console.log(getSecondItems(arr3))