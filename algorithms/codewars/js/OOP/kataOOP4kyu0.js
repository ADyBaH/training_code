/*
The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new redos.
*/

function undoRedo(object) {
  let firstObj = {};
  Object.assign(firstObj, object);
  let memoryUndo = [];
  let memoryRedo = [];
  let setFunc = function (key, value) {
    object[key] = value;
  };
  console.log(object)
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
      delete object[key]
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
      if(memoryUndo[memoryUndo.length - 1].name === 'del') {
        object[memoryUndo[memoryUndo.length - 1].setkey] =
          memoryUndo[memoryUndo.length - 1].old;
        memoryRedo.push(memoryUndo.pop());
        console.log(`Отменяем результат удаления`)
        return
      }
      if(memoryUndo[memoryUndo.length - 1].name === 'set') {
        if(memoryUndo[memoryUndo.length - 1].old) {
          object[memoryUndo[memoryUndo.length - 1].setkey] =
            memoryUndo[memoryUndo.length - 1].old;
        } else {
          delete object[memoryUndo[memoryUndo.length - 1].setkey];
        }
        memoryRedo.push(memoryUndo.pop());
        console.log(`отменяем запись`)
        return
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
        console.log(`Востанавливаем отмененное удаление`)
        return;
      }
      if(memoryRedo[memoryRedo.length - 1].name === 'set') {
        object[memoryRedo[memoryRedo.length - 1].setkey] =
          memoryRedo[memoryRedo.length - 1].new;
        memoryUndo.push(memoryRedo.pop());
        console.log(`Востанавливаем отмененное запись`)
        return
      }
    },
  };
}

// better solution:
function undoRedo(obj) {
  var u = [], r = [];
  
  function set(k, v) {
    r = [], u.push(k in obj ? [k, obj[k]] : [k]);
    if (arguments.length > 1) obj[k] = v;
    else delete obj[k];
  }
  function undo(u, r, a) {
    if (a = u.pop()) {
      r.push(a[0] in obj ? [a[0], obj[a[0]]] : [a[0]]);
      if (a.length == 1) delete obj[a[0]];
      else obj[a[0]] = a[1];
    }
    return a;
  }
  
	return {
		set: function(k, v) { set(k, v); },
		get: function(k) { return obj[k]; },
		del: function(k) { set(k); },
		undo: function() { if (!undo(u, r)) throw "Nothing to undo"; },
		redo: function() { if (!undo(r, u)) throw "Nothing to redo"; }
	};
}