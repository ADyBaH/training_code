function* generateSequence(start, end) {
  for (let i=start; i <= end; i += 1) yield i;
}

function* generatePasswordCodes() {
  // yield* тоже самое что и for (let i = 48; i <= 57; i++) yield i;
  // 0..9.
  yield* generateSequence(48, 57);

  // A..Z 
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str+= String.fromCharCode(code);
}

console.log(str);