// try..catch нужно писать внутри setTimeout

try {
  setTimeout(function() {
    noSuchVariable;
  }, 1000);
} catch (e) {
  console.log("не сработает")
}

// Правильно ловим ошибки в setTimeout

setTimeout (function() {
  try {
    noSuchVariable;
  } catch(e) {
    console.log("ошбика " + e)
  }
}, 1000);
