Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
  // Если в Promise.all будет ошибка то это прервет весь промис.
  // new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!'), 1000)),
]).catch(function(error) {
  console.log(error)
}).then(function(result) {
  console.log(...result);
})