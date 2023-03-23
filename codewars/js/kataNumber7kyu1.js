// How i decided https://www.codewars.com/kata/digits-explosion
'use strict'
function explode(s) {
  let answer = ''
  for (let number of s.split('')) {
    for (let i = 0; i < number; i++) {
      answer += number;
    }
  }
  
  return answer;
}

console.log(explode("102269"))

// How to decide:
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

// Didn't know about the repeat() method. Now i know.