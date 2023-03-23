/* Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs) */
function numberOfPairs(gloves) 
{
  let newMap = {};
  let answer = 0;
  for (let i = 0; i < gloves.length; i++) {
    if(!(gloves[i] in newMap)) newMap[gloves[i]] = 1;
    else newMap[gloves[i]] += 1;
  }
  for (let key in newMap) {
    if (newMap[key] >= 2){
      answer += Math.floor(newMap[key] / 2)
    }
  }
  return answer;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]))
console.log(numberOfPairs(['red','green','blue']))
console.log(numberOfPairs(['red','red']))
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]))

// Better solution:
function numberOfPairs(gloves)
{
  var arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}