/*
The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. 
It returns a function. The function it returns will return successive characters of the string on successive invocations.
It will start back at the beginning of the string once it reaches the end.
*/


function makeLooper(string) {
  let count = 0;
  return () => {
    if(string.length < count + 1) count = 0;
    const answer = string[count]
    count += 1;
    return answer;
  }
}


var abc = makeLooper('abc');
console.log(abc()); // should return 'a' on this first call
console.log(abc()); // should return 'b' on this second call
console.log(abc()); // should return 'c' on this third call
console.log(abc()); // should return 'a' again on this fourth call

// better solution:
const makeLooper = (str, i = -1) => () => ++i - str.length ? str[i] : str[i = 0];