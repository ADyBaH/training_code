// (16+18=214)
// implement logic from meme: 248 + 208 = 4416


function add(num1, num2) {
  const maxNum = Math.max(num1, num2).toString().split('').reverse('');
  const minNum = Math.min(num1, num2).toString().split('').reverse('');
  
  let answer = '';
  
  for (let i = 0; i < maxNum.length; i += 1) {
    if (minNum[i]) {
      let value = +maxNum[i] + +minNum[i];
      answer += value.toString().split("").reverse().join("");
    } else {
      answer += +maxNum[i];
    }
  }
  
  return +answer.split("").reverse().join("");
}

// better solution: 
function add(num1, num2) {
  let arr1 = num1.toString().split('')
  let arr2 = num2.toString().split('')  
  let result = []
  while (arr1.length > 0 || arr2.length > 0) {
    let el1 = arr1.pop()
    let el2 = arr2.pop()
    let temp = (el1 ? +el1 : 0) + (el2 ? +el2 : 0)
    result.push(temp)
  }
  return +result.reverse().join('')
}
// better solution:
function add(x, y) {
  let arr1 = x.toString().split('').reverse()
  let arr2 = y.toString().split('').reverse()
  let res = []
  for (let i=0; i<Math.max(arr1.length, arr2.length); i++){
    res.push((+arr2[i] || 0) + (+arr1[i] || 0))
  }
  return +res.reverse().join('')
}