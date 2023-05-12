/*
*  [] => []
*  [ 1 ] => [ 1 ]
*  [ 'a', 'b' ] => [ 'a', 'b','b' ]
*  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
*  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
*/

const propagateItemsByPositionIndex = (arr) => arr.map((v, i) => new Array(i + 1).fill(v)).flat(Infinity);
// or
const propagateItemsByPositionIndex1 = (arr) => arr.flatMap((v, i) => Array.from({ length: i + 1 }).fill(v));

/*
old solution:
  let answer = arr.slice(0);
  answer = answer.map((v, i) => {
    const mapArr = new Array(i + 1);
    mapArr.fill(v);
    return mapArr
  });
  return answer.flat(Infinity);
  }

old solution:
  function propagateItemsByPositionIndex(arr) {
    // throw new Error('Not implemented');
    const answer = [];
    arr.map((value, index) => {
      const mapArr = new Array(index + 1);
      mapArr.fill(value);
      answer.push(...mapArr);
      return false;
    });
    return answer;
  }
*/
