/**
 * Returns every second item from the specified array:

 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
const getSecondItems = (arr) => arr.filter((_, index) => (index + 1) % 2 === 0);
  //old solution:
  // return arr.filter((value, index) => {
  //   if ((index + 1) % 2 === 0) {
  //     return true;
  //   }
  //   return false;
  // });


console.log(getSecondItems([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))// => [ 2, 4, 6, 8, 10 ]
console.log(getSecondItems([ 'a', 'b', 'c' , null ]))//  => [ "b", null ]
console.log(getSecondItems([ "a" ]))// => []