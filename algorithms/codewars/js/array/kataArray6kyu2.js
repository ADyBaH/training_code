/* You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
*/
function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays != null && !arrayOfArrays.includes(0)) {
    let box = [];
    for (let i = 0; i < arrayOfArrays.length; i++) {
      if (Array.isArray(arrayOfArrays[i])) {
        if (arrayOfArrays[i].length == 0) return 0;
        box.push(arrayOfArrays[i].length);
      }
    }
    box = box.sort((a, b) => a - b);
    console.log(box)
    for (let i = box[0]; i < box[box.length-1]; i++) {
      if (!box.includes(i)) {
        return i;
      }
    }
  }
  return 0;
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 3
console.log(getLengthOfMissingArray([[]]))
console.log(getLengthOfMissingArray([[], [2, 2], [3, 2, 0, 1], [2]]))
console.log(getLengthOfMissingArray(null))
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ))
// Better solution:
function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}