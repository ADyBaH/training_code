/* Task:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/
function duplicateEncode(word){
  word = word.toLowerCase()
  let str = ''
  let unicset = word.split('').sort()
  for (let i = 0; i < word.length; i++) {
    if(unicset[unicset.indexOf(word[i])] === unicset[unicset.indexOf(word[i])+1]) {
      str += ")"
    } else {
      str += "("
    }
  }
  return str;
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("Recede"))
console.log(duplicateEncode("(( @"))
console.log(duplicateEncode("Success"))

// Better solution:
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}