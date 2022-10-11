class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}

class ValidationsError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationsError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}
// Использование 
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("Нет поля: age");
  }
  
  if (!user.name) {
    throw new PropertyRequiredError("Нет поля: name");
  }

  return user;
}

// Рабочий пример с try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationsError) {
    console.log("Некорректные данные: " + err.message);
    console.log(err.name)
    console.log(err.property)
    // else if (err.name == "SyntaxError") тоже сработает.
  } else if (err instanceof SyntaxError) {
    console.log("JSON ошибка Синтаксиса: " +err.message);
  } else {
    throw err;
  }
}