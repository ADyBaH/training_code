function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log(generator) // { [Generatir] }

let one = generator.next();

console.log(one); // { value: 1, done: false }

let two = generator.next();

console.log(two); // { value: 2, done: false }

let three = generator.next(); 

console.log(three); // // { value: 3, done: true }

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
generator = generateSequence();

for (let value of generator) {
  console.log(value); // 1, 2, 3
}

let sequence = [0, ...generateSequence()];
console.log(sequence) // [0, 1, 2, 3]