var isPalindrome = function(x) {
  const stringNumber = String(x)
  let reverseNumber = ''

  for (let i = stringNumber.length - 1; i >= 0; i -= 1) {
      reverseNumber += stringNumber[i]
  }

  return stringNumber === reverseNumber
};
