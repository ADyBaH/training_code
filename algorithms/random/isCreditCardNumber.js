/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let answer = `${ccn}`.split('');
  const lastNumber = answer.pop();
  answer.reverse();
  answer = answer.map((val, index) => {
    if ((index + 1) % 2 !== 0) {
      const mapVal = +val * 2;

      return mapVal;
    }
    return +val;
  });
  answer = answer.map((val) => {
    if (val > 9) {
      const mapVal = val - 9;
      return mapVal;
    }
    return val;
  });

  return (answer.reduce((acc, val) => acc + val) + +lastNumber) % 10 === 0;
}
