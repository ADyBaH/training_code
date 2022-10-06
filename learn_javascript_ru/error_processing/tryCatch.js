try {
  console.log("Start block try");

  // Необъявленная переменная вызывающая ошибку.
  kekw;

  console.log("End block try");
} catch(err) {
  // Выводим в консоль лог информацию об ошибке.
  console.log(`Error type: ${err}`);
  // Вывод ошибки по частям.
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// JS не проверяет синтаксис:
/* 
try {
{{{{{{{{{{{{
} catch(e) {
alert("Движок не может понять этот код, он некорректен");
}
*/