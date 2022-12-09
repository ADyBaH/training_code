new Promise((resolve, reject) => {

  throw new Error('Error!');

}).catch(function(error) {

  if(error instanceof URIError) {
    // Обработка ошибки
  } else {
    console.log(`Не могу обработать: ${error}.`);

    throw error;
  }
  
}).then(() => {
  console.log("Управление переходит в следующий then.");//Не выполняеться.
}).catch(error => {
  console.log(`Неизвестная ошибка: ${error}`)
})