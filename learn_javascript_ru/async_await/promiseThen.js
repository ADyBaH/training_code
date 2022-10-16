let promise = new Promise(function(resolve, reject) {
  // setTimeout(() => resolve("done!"),1000)
  // setTimeout(() => reject(new Error("Whoops!")),1000)
  throw new Error("err")
});
 
// Обрабатываем ошибку в then
// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// )

//Обрабатываем ошибку cath
promise
.finally(() => console.log("Promise done"))
.catch( err => console.log(err));