function* gen() {
  let ask1 = yield "2 + 2 = ?";

  console.log(ask1);

  let ask2 = yield "3 * 3 = ?";

  console.log(ask2);
}

let generator = gen();

let question = generator.next().value;

generator.next(4);

generator.next(9);