/* Your task is to create a function deepCount that returns the number of ALL elements within an array, 
including any within inner-level arrays.

For example:
deepCount([1, 2, 3]); //>>>>> 3
deepCount(["x", "y", ["z"]]); //>>>>> 4
deepCount([1, 2, [3, 4, [5]]]); //>>>>> 7
*/
function deepCount(a){
  let answer = 0;
  for (let item of a) {
    answer += 1;
    if (Array.isArray(item)) {
        answer += deepCount(item)
    }
  }
  return answer
}

console.log(deepCount([7, [[[[27, [[]], 5]], [[[[]], [[]], [[]]]], 2]], 26]))
console.log(deepCount(["x", "y", ["z"]]))
console.log(deepCount([1, 2, [3, 4, [5]]]))

// Better solution:
function deepCount(a){
  return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}