let json = '{"name":, "age": 30}';


try {
  let user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (e) {
  console.log("Error"); // text
  console.log(e.name);  // Name Error
  console.log(e.message)  // why and position
}