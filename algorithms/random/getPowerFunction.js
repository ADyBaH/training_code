/**
 * Returns the math power function with the specified exponent
 *
 * @param {number} exponent
 * @return {Function}
 *
 * @example
 *   const power2 = getPowerFunction(2); // => x^2
 *   power2(2) => 4
 *   power2(4) => 16
 *
 *   const power05 = getPowerFunction(0.5); // => x^0.5
 *   power05(4) => 2
 *   power05(16) => 4
 *
 */
const getPowerFunction = (exponent) => (i) => i ** exponent;

/*
old solution:
  function getPowerFunction(exponent) {
    // throw new Error('Not implemented');
    const ex = exponent;
    return function pow(i) {
      return i ** ex;
    };
  }
*/
const power2 = getPowerFunction(2); // => x^2
console.log(power2(2))// => 4
console.log(power2(4))// => 16

const power05 = getPowerFunction(0.5); // => x^0.5
console.log(power05(4) )//=> 2
console.log(power05(16))// => 4