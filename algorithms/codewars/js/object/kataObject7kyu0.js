// How i decided https://www.codewars.com/kata/my-language-skills
function myLanguages(results) {
  return Object.entries(results).sort((a,b) => a[1] < b[1] ? 1 : -1).filter(a => a[1] >= 60 ? a : undefined).map(a => a[0])
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))

// How to decide:
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}