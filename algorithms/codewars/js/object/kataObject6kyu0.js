/* Task: 
Write Run-length encoding

Examples

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]
*/
var runLengthEncoding = function(str){
  let answer = [];
  let boxLen = [];
  let boxForLetter = []
  let i = 0;
  do {
    if (boxLen[0] != str[i] && boxLen[0] != undefined) {
      boxForLetter.push(boxLen);
      boxLen = [str[i]];
    } else boxLen.push(str[i]);
    i++;
  } while (i < str.length+1);
  for (let item of boxForLetter) {
    answer.push([item.length, item[0]])
  }
	return answer;
}
console.log(runLengthEncoding("abc")) 
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))
console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"))

// Better solution #1:
function runLengthEncoding(str) {
  var arr = [],
      counter = 1;

  for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          counter++;
      } else {
          arr.push([counter, str[i]]);
          counter = 1;
      }
  }

  return arr;
}

// Better solution #2:
const runLengthEncoding = str =>
  (str.match(/(.)\1*/g) || []).map(val => [val.length, val[0]]);