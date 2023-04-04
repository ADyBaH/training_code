/*
*  [] => []
*  [ 1 ] => [ 1 ]
*  [ 'a', 'b' ] => [ 'a', 'b','b' ]
*  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
*  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
*/
function propagateItemsByPositionIndex(arr) {
  let answer = arr.slice(0);
  answer = answer.map((v, i) => {
    const mapArr = new Array(i + 1);
    mapArr.fill(v);
    return mapArr
  });
  return answer.flat(Infinity);
  
  // Previous solution:
  // const answer = [];
  // arr.map((value, index) => {
  //   const mapArr = new Array(index + 1);
  //   mapArr.fill(value);
  //   answer.push(...mapArr);
  //   return false;
  // });
  // return answer;
 }
 
 console.log(propagateItemsByPositionIndex([]))// => []
 console.log(propagateItemsByPositionIndex([ 1 ]))// => [ 1 ]
 console.log(propagateItemsByPositionIndex([ 'a', 'b' ]))// => [ 'a', 'b','b' ]
 console.log(propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]))// => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 console.log(propagateItemsByPositionIndex([ 1,2,3,4,5 ]))// => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]