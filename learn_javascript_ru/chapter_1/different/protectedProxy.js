let user = {
  name: "Вася",
  _password: "***",
};

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Отказано в доступе");
    } else {
      let value = target[prop];
      return typeof value === "function" ? value.bind(target) : value;
    }
  },
  set(target, prop, val) {
    if (prop.startsWith("_")) {
      throw new Error("Отказано в доступе");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Отказано в доступе");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

try {
  console.log(user._password);
} catch (e) {
  console.log(e.message);
}

try {
  user._password = "test";
} catch (e) {
  console.log(e.message);
}

try {
  delete user._password;
} catch (e) {
  console.log(e.message);
}

for (let key in user) console.log(key);
