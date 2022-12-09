let dictionary = {
  'hello': 'Hola',
  'Buy': 'Aduos',
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase];
    } else {
      return phrase;
    }
  }
});

console.log( dictionary['hello'] );
console.log( dictionary['Welcome to Proxy'] );