'use strict'
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start);

  if (start + 100 < Date.now()) alert(times);
  else setTimeout(run);
});