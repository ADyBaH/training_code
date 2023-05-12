/*
Your task is to create a compose function to carry out this task,
which will be passed two functions or lambdas.
Ruby functions will be passed, and should return, either a proc or a lambda.
Remember that the resulting composed function may be passed multiple arguments!
*/

const compose = (f,g) => (...arg) => f(g(...arg));

const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

console.log(compose(add1,addAll3)(1,2,3))//, 7 )
