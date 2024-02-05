/*
  Given an integer number n,
  return the difference between the product
  of its digits and the sum of its digits.
*/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const splitNumber = String(n).split("");
  let sumDigits = 0;
  let multiplyDigits = 1;

  for (let i = 0; i < splitNumber.length; i++) {
    sumDigits = sumDigits + Number(splitNumber[i]);
    multiplyDigits = multiplyDigits * Number(splitNumber[i]);
  }

  return multiplyDigits - sumDigits;
};

console.log(subtractProductAndSum(234));
