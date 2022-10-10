class ValidationsError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Использование 
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationsError("Нет поля: age");
  }
  
  if (!user.name) {
    throw new ValidationsError("Нет поля: name");
  }

  return user;
}

// Рабочий пример с try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationsError) {
    console.log("Некорректные данные: " + err.message);
  } else if (err instanceof SyntaxError) {
    console.log("JSON ошибка Синтаксиса: " +err.message);
  } else {
    throw err;
  }
}