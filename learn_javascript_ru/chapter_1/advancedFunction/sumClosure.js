/* Напишите функцию sum , которая работает таким образом: sum(a)(b) = a+b  */
function sum(a) {
  return function(b) {
    return a + b;
  }
};

console.log(sum(1)(2))