function undoRedo(object) {
  let firstObj = {};
  Object.assign(firstObj, object);
  let memoryUndo = [];
  let memoryRedo = [];
  let setFunc = function (key, value) {
    object[key] = value;
  };
  console.log(object);
  return {
    set: function (key, value) {
      console.log(`unRe.set(${key}, ${value})`);
      memoryUndo.push({
        name: "set",
        setkey: key,
        old: object[key],
        new: value,
      });
      setFunc(key, value);
      memoryRedo = [];
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      console.log(`unRe.del(${key})`);
      let oldObj = {};
      Object.assign(oldObj, object);
      delete object[key];
      memoryUndo.push({
        name: "del",
        setkey: key,
        old: oldObj[key],
        new: object[key],
      });
      memoryRedo = [];
    },
    undo: function () {
      console.log(`unRe.undo()`);
      if (memoryUndo.length === 0) {
        throw Error("Memory undo null");
      }
      if (memoryUndo[memoryUndo.length - 1].name === "del") {
        object[memoryUndo[memoryUndo.length - 1].setkey] =
          memoryUndo[memoryUndo.length - 1].old;
        memoryRedo.push(memoryUndo.pop());
        console.log(`Отменяем результат удаления`);
        return;
      }
      if (memoryUndo[memoryUndo.length - 1].name === "set") {
        if (memoryUndo[memoryUndo.length - 1].old) {
          object[memoryUndo[memoryUndo.length - 1].setkey] =
            memoryUndo[memoryUndo.length - 1].old;
        } else {
          delete object[memoryUndo[memoryUndo.length - 1].setkey];
        }
        memoryRedo.push(memoryUndo.pop());
        console.log(`отменяем запись`);
        return;
      }
    },
    redo: function () {
      console.log(`unRe.redo()`);
      if (memoryRedo.length === 0) {
        throw Error("Memory rendo null");
      }
      if (memoryRedo[memoryRedo.length - 1].name === "del") {
        delete object[memoryRedo[memoryRedo.length - 1].setkey];
        memoryUndo.push(memoryRedo.pop());
        console.log(`Востанавливаем отмененное удаление`);
        return;
      }
      if (memoryRedo[memoryRedo.length - 1].name === "set") {
        object[memoryRedo[memoryRedo.length - 1].setkey] =
          memoryRedo[memoryRedo.length - 1].new;
        memoryUndo.push(memoryRedo.pop());
        console.log(`Востанавливаем отмененное запись`);
        return;
      }
    },
  };
}
// better solution 1:
function undoRedo(obj) {
  var u = [],
    r = [];

  function set(k, v) {
    (r = []), u.push(k in obj ? [k, obj[k]] : [k]);
    if (arguments.length > 1) obj[k] = v;
    else delete obj[k];
  }
  function undo(u, r, a) {
    if ((a = u.pop())) {
      r.push(a[0] in obj ? [a[0], obj[a[0]]] : [a[0]]);
      if (a.length == 1) delete obj[a[0]];
      else obj[a[0]] = a[1];
    }
    return a;
  }

  return {
    set: function (k, v) {
      set(k, v);
    },
    get: function (k) {
      return obj[k];
    },
    del: function (k) {
      set(k);
    },
    undo: function () {
      if (!undo(u, r)) throw "Nothing to undo";
    },
    redo: function () {
      if (!undo(r, u)) throw "Nothing to redo";
    },
  };
}
// better solution 2:
function undoRedo(object) {
  function History(type, key, oldValue, newValue) {
    this.type = type;
    this.key = key;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
  function UndoLimitException() {
    this.name = "UndoLimitException";
    this.message = "cannot undo";
  }
  function RedoLimitException() {
    this.name = "RedoLimitException";
    this.message = "cannot redo";
  }

  var history = [];
  var index = 0;
  return {
    set: function (key, value) {
      if (object.hasOwnProperty(key))
        history.push(new History("set", key, object[key], value));
      else history.push(new History("new", key, null, value));
      object[key] = value;
      index++;
      history.length = index;
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      history.push(new History("del", key, object[key], null));
      delete object[key];
      index++;
      history.length = index;
    },
    undo: function () {
      if (index <= 0) throw new UndoLimitException();
      index--;

      var h = history[index];
      if (h.type == "set") object[h.key] = h.oldValue;
      else if (h.type == "new") delete object[h.key];
      else if (h.type == "del") object[h.key] = h.oldValue;
    },
    redo: function () {
      if (index >= history.length) throw new RedoLimitException();

      var h = history[index];
      if (h.type == "set") object[h.key] = h.newValue;
      else if (h.type == "new") object[h.key] = h.newValue;
      else if (h.type == "del") delete object[h.key];

      index++;
    },
  };
}
