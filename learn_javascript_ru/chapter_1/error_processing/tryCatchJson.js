let json = '{"age": 30}';


try {

  let user = JSON.parse(json);

  if(!user.name) {
    // Кастомная ошибка:
    throw new SyntaxError("Данные неполные: нет имени")
  }

  blabla();

  console.log(user.name);
  console.log(user.age);
} catch (e) {

  if(e.name == "SyntaxError") {
    console.log("JSON Error: " + e.message);
  } else {
    throw e; // исключение
  }
  console.log(e.name);  // Name Error
  console.log(e.message)  // why and position
}