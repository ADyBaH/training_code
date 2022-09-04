// How i decided https://www.codewars.com/kata/the-coupon-code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (correctCode == enteredCode) ? new Date(currentDate) <= new Date(expirationDate) : false;
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));

// How to decide:
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
// Yep with && operator looks better.