/*
You'll be given a list of two strings,
and each will contain exactly one colon
(":") in the middle (but not at beginning or end).
The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings
(in the same order as the original list), but with the characters after each colon swapped.
*/



function tailSwap(arr) {
  const first = arr[0].split(':');
  const second = arr[1].split(':');

  [first[1], second[1]] = [second[1], first[1]];

  return [first.join(':'), second.join(':')];
}

// console.log(tailSwap(['abc:123', 'cde:456']), ['abc:456', 'cde:123']);
// console.log(tailSwap(['a:12345', '777:xyz']), ['a:xyz', '777:12345']);