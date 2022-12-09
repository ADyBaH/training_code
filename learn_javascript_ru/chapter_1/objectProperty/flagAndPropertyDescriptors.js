'use strict'
let user = {
  name: 'John'
};

// Получаем дополнительные свойства объекта.
let description = Object.getOwnPropertyDescriptor(user, 'name');


// Парсим объект в строку.
console.log( JSON.stringify(description, null, 2) );

let user2 = {};
Object.defineProperty(user2, 'name', {
  value: 'John2'});

// Когда объект создается с помощью defineProperty флаги свойств установлены на false.
let description2 = Object.getOwnPropertyDescriptor(user2, 'name');
console.log( JSON.stringify(description2,  null, 2))

// Запрещаем переписывать объект.
let user3 = {
  name: 'John3'
};

Object.defineProperty(user, 'name', {
  writable: false
});

console.log(user3.name)
// При попытке переписать свойство выдаст ошибку Cannot assign to read only property 'name' of object '#<Object>' 
// user.name = 'Pete'


let user4 = {
  name: 'John',
  toString() {
    return this.name;
  }
};

// Запрещаем перечислять
Object.defineProperty(user4, 'toString', {
  enumerable: false
});

console.log(user4.name)
for (let key in user4) console.log(key)

// Методы тоже не перечисляют ключи:
console.log(Object.keys(user4));

// Неконфигурируемое свойство
let description3 = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log( JSON.stringify(description3, null, 2))

// Метод для нескольких свойств.
// Object.defineProperties(obj, {
  // prop1: description1,
  // prop1: description1, ....
// })

// Чтобы скопировать объект с его свойствами:
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// Глобальнео запечатывание объекта.

// Запрещает добавлять новые свойства в объект.
// Object.preventExtensions(obj)

// Запрещает добавлять и удалять свойства. Установит для всех свойств configurable: false.
// Object.seal(obj)

// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false
// для всех свойств.
// Object.freeze(obj)

// Проверяем свойства:

// Возвращает false, если добавление свойств запрещено, иначе true.
// Object.isExtensible(obj)

// Возвращает true, если добавление/удаление свойств запрещено и у всех стоит configurable: false.
// Object.isSealed(obj)

// Возвращает true, если для всех свойств стоит configurable: false, writable: false.
// Object.isFrozen(obj)