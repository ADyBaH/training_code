/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
and returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased.
The indexing just explained is zero based, 
so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

// My solution:
const toWeirdCase = (string) => {
  let flag = true;
  return string.split('').reduce((acc, v) => {
    if(v === ' ') {
      acc += v;
      flag = true;
    } else if (flag) {
      acc += v.toUpperCase();
      flag = false;
    } else {
      acc += v;
      flag = true;
    }
    return acc;
  }, '')
}

// Better solution:
function toWeirdCase1(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}
// or:
function toWeirdCase2(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
