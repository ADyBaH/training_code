/*
In this kata you have to implement a base converter, 
which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string),
the source alphabet (string) and the target alphabet (string).
You can assume that the input value always consists of characters from the source alphabet.
You don't need to validate it.

Examples
// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
*/

//My solution:
function convert(input, source, target) {
  let answer = [];
  if (isNaN(+input)) {
    input = input.split("").map((v) => String(source.indexOf(v)));
  } else {
    input = input.split("");
  }
  let input10 = input.reduce(
    (acc, v, i, arr) => (acc += v * source.length ** (arr.length - 1 - i)),
    0
  );
  do {
    answer.push(input10 % target.length);
    input10 = Math.floor(input10 / target.length);
  } while (input10 > 0);
  return answer
    .reverse()
    .map((v) => target[v])
    .join("");
}

// Better solution:
function convert(input, source, target) {
  var inBase = source.length, len = input.length;
  var value = input.split('')
    .reduce(function(p,v,i){return p+source.indexOf(v)*Math.pow(inBase,len-i-1)},0);
  return toBase(value,target);
}

function toBase(value, target){
  var base = target.length;
  if(value<base) return ''+target.charAt(value);
  return toBase(Math.floor(value/base),target) + target.charAt(value%base);
}

// or:
function convert(input, source, target) {
  let s=0;  let str='';
  for (let i=0; i<input.length; i++) {
    s=s*source.length+source.indexOf(input[i]);
  }
  while (s>0) {
    str=target[s%target.length]+str;
    s=Math.floor(s/target.length);
  }  
  return str ? str : target[0];
}

// or:
function convert(input, source, target) {
  var t = '', n = input.split('').reduce((n,v)=>n * source.length + source.indexOf(v), 0);
  do { t = target[n % target.length] + t;
       n = Math.floor(n / target.length); 
     } while (n > 0)
  return t;
}