let user = {
  _name: "Гость",
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy (user, {
  get(target, prop, receiver) {
    // return target[prop];
    return Reflect.get(target, prop, receiver);
    // кототкая запись ловушки: return Reflect.get(...arguments);
  }
});

let admin = {
  __proto__: userProxy,
  _name: "Админ",
};

console.log(admin.name);
console.log(userProxy.name);