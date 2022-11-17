let map = new Map();

let proxyError = new Proxy(map, {});

// proxyError.set("test", 1); Get error;

// for fix it:
let proxy = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value == "function" ? value.bind(target) : value;
  }
});

proxy.set("test", 1);
console.log(proxy.get('test'));