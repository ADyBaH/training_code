let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for(let value = this.from; value <= this.to; value += 1) {
      yield value;
    }
  }
};

console.log( [...range] );