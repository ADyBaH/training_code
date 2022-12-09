//Цепочка промисов
// Каждый then возвращает promis отчего мы из then вызвать новый then
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  console.log(result);
  return result * 2
}).then(function(result) {
  console.log(result);
  return result * 2
}).then(function(result) {
  console.log(result);
  return result * 2
})