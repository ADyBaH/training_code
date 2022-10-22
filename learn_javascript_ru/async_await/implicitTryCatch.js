new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  console.log(result)
  blablabla();
}).catch((err) => {
  console.log(err)
})