/*
*    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
*    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
*    [ false, 0, NaN, '', undefined ]   => [ ]
*/
const removeFalsyValues = (arr) => arr.filter(Boolean);

const var1 = [ 0, false, 'cat', NaN, true, '' ]
const var2 = [ 1, 2, 3, 4, 5, 'false' ]
const var3 = [ false, 0, NaN, '', undefined ]
console.log(removeFalsyValues(var1))// => [ 'cat', true ]
console.log(removeFalsyValues(var2))//         => [ 1, 2, 3, 4, 5, 'false' ]
console.log(removeFalsyValues(var3))//   => [ ]