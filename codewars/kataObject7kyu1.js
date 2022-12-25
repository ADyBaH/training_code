/*Your task is to write a function that takes two or more objects and 
returns a new object which combines all the input objects.
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/

function combine(...arg) {
  let answer = {};
  Object.assign(answer, arg[0]);
  for (let i = 1; i < arg.length; i += 1) {
    for (let item in arg[i]) {
      if (answer[item]) {
        answer[item] += arg[i][item];
      } else {
        answer[item] = arg[i][item];
      }
    }
  }
  return answer;
}

// Better solution:
const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
 }, {});

// Better solution:
const combine = (...args) =>
  args.reduce((pre, val) => (Object.keys(val).forEach(v => pre[v] = (pre[v] || 0) + val[v]), pre), {});