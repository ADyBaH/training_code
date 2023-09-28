/*
Complete the solution so that it splits the 
string into pairs of two characters. 
If the string contains an odd number 
of characters then it should replace 
the missing second character of 
the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


function solution(str) {
  // (s+"_").match(/.{2}/g)||[]
  const stringsArray = [];

  for (let index = 0; index < str.length; index++) {
    const firstValue = str[index];
    const secondValue = str[index + 1] || "_";
    stringsArray.push(firstValue + secondValue);
    index += 1;
  }

  return stringsArray;
}
