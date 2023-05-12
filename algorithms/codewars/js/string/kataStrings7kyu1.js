/* How i decided https://www.codewars.com/kata/disemvowel-trolls */
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  answer = str.split('').map(word => vowels.includes(word.toLowerCase()) ?  "": word).join('');
  return answer;
}

console.log(disemvowel("This website is for losers LOL!"))

// How to decide:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// I haven't gone through regular expressions yet.