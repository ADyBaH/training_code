async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('готово'), 1000)
  });

  let result = await promise;

  console.log(result);
}

f();