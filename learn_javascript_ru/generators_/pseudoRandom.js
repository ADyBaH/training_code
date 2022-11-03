function* pseudoRandom(seed) {
  let value = seed;

  while(true) {
    value = value * 16807 % 2147483647
    yield value;
  }

};

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// or normal function:

function pseudoRandom1(seed) {
  let value = seed;

  return function() {
    value = value * 16807 % 2147483647
    return value;
  }

};

let generator1 = pseudoRandom1(1);

console.log(generator1())
console.log(generator1())
console.log(generator1())