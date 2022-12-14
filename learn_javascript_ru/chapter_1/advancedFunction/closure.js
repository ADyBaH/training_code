/*1. Функция sayHi использует внешнюю переменную name . Какое значение будет
использовать функция при выполнении */
'use strict'

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";
sayHi();
/* Ответ Pete потому что функция находит переменную из внешнего окружения которое перезаписано перед вызовом */

/* Функция makeWorker создаёт другую функцию и возвращает её. Новая функция может
быть вызвана откуда-то ещё. Получит ли она доступ к внешним переменным из места
своего создания или места выполнения или из обоих? */

function makeWorker() {
  let name2 = "Pete";

  return function() {console.log(name2);};
}

let name2 = "John";

let work = makeWorker();
work();
/* Ответ Pete так как анонимная функция берет переменную из окружения функции makeWorker у которой выше приоритет.*/