function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  console.log(`Hi ${user}`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length);

sayHi("Victor");