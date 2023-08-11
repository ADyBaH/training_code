/*
Given 2 strings, a and b, return a string of the form short+long+short, 
with the shorter string on the outside and the longer string on the inside.
The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
*/


const solution = (firstString, secondString) =>
  ({
    sortArray: [firstString, secondString].sort((a, b) => a.length - b.length),
    getString: function () {
      return `${this.sortArray[0]}${this.sortArray[1]}${this.sortArray[0]}`;
    },
  }.getString());


// better solution
const solution1 = (a, b) => a.length < b.length ? a + b + a : b + a + b


// console.log(solution("45", "1")); //, '1451');
// console.log(solution('13', '200')); //, '1320013');
// console.log(solution('Soon', 'Me')); //, 'MeSoonMe');
// console.log(solution('U', 'False')); //, 'UFalseU');
