// How i decided https://www.codewars.com/kata/isograms
'use strict'
function isIsogram(str){
  let answer = new Set(str.toLowerCase().split(''));
  return answer.size == str.length;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))

// How to decide
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}