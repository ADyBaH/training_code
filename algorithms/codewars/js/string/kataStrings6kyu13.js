/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const solution = (string) => {
  // Better: string.replace(/([A-Z])/g, ' $1')
  return string
    .split("")
    .reduce(
      (acc, value) =>
        /[A-Z]/.test(value) ? (acc += ` ${value}`) : (acc += value),
      ""
    );
};
