let target = {};
let proxy = new Proxy(target, {});

proxy.text = 5;

console.log(target.text);

console.log(proxy.text);

for(let key in proxy) console.log(key);
