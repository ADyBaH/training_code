// Your task is to write a compose function which can compose any number of functions together.

function compose() {
  if(!arguments.length) return (v) => v;
  return (a) => {[...arguments].reverse().forEach(v => a = v(a)); return a};
}


const addOne = (a) => a + 1
const multTwo = (b) => b * 2


console.log(compose(multTwo, addOne)(5))//, 12, 'compose two functions')
console.log(compose(addOne, multTwo, addOne, addOne)(2))//, 9, 'compose four functions')
console.log(compose(addOne)(3))//, 4, 'compose one function')
console.log(compose()(10))//, 10, 'compose no functions')


// Better solution: 
const compose1 = (...fns) => arg => fns.reduceRight((res, fn) => fn(res), arg);