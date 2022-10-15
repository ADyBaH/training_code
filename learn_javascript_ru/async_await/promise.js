let promise = new Promise(function(resolve, reject) {
  resolve(console.log('done'))
  reject(new Error('...'))
  setTimeout(() => resolve(console.log('...')), 1000);
})

// console.log(promise)