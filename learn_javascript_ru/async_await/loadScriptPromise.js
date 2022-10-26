// Код без промиса из главы введенеи в колбэк.
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  document.head.append(script);
  }
  // использование:
  // loadScript('path/script.js', (err, script) => {...})

// Его промисификация:
let loadScroptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  })
}

// использование:
// loadScriptPromise('path/script.js').then(...)