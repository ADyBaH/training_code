const log = console.log;
// Введите регулярное выражение, чтобы найти время в строке: Завтрак в 09:00 в комнате 123:456.
const string = "Завтрак в 09:00 в комнате 123:456.";

log(string.match(/\b[0-9][0-9]:[0-9][0-9]\b/g));
log("Завтрак в 09:00 в комнате 123:456.".match( /\b\d\d:\d\d\b/ ) );

/* Время может быть в формате часы:минуты или часы-минуты. 
И часы, и минуты имеют две цифры: 09:00 или 21-30. */

let regexp1 = /\b\d\d[:-]\d\d\b/g;
log( "Завтрак в 09:00. Ужин в 21-30".match(regexp1) ); // 09:00, 21-30

//Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).

let regexp2 = /[.]{1,}/g;
log( "Привет!... Как дела?.....".match(regexp2) ); // ..., .....

/* Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF: 
первым идёт символ #, и потом – 6 шестнадцатеричных символов. */

let regexp3 = /#[\d\w][\d\w][\d\w][\d\w][\d\w][\d\w][\s;]/g
// better solution: /#[a-f0-9]{6}\b/gi
let str1 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( str1.match(regexp) )  // #121212,#AA00ef

// Найти все HTML-комментарии в тексте:
let regexp4 = /<!--.*?-->/gs;

let str4 = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log( str4.match(regexp4) ); // '<!-- My -- comment \n test -->', '<!---->'

// Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.
let regexp5 = /<[^<>]+>/g;

let str5 = '<> <a href="/"> <input type="radio" checked> <b>';

// MAC-адрес сетевого интерфейса состоит из 6-ти двузначных шестнадцатеричных чисел, разделённых двоеточиями.

console.log( str5.match(regexp5) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

let regexp6 = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;

console.log( regexp6.test('01:32:54:67:89:AB') ); // true

console.log( regexp6.test('0132546789AB') ); // false (нет двоеточий)

console.log( regexp6.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)

console.log( regexp6.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)

/* Напишите регулярное выражение, которое соответствует цветам в формате #abc или #abcdef. 
То есть: # и за ним 3 или 6 шестнадцатеричных цифр. */

let regexp7 = /#([a-f0-9]{3}){1,2}/gi;

let str7 = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log( str7.match(regexp7) ); // #3f3 #AA00ef


/* 
Напишите регулярное выражение,
которое ищет любые десятичные числа,
включая целочисленные, с плавающей точкой и отрицательные.
*/
let regexp8 = /-?\d+(\.\d+)?/g;

let str8 = "-1.5 0 2 -123.4.";

console.log( str8.match(regexp8) ); // -1.5, 0, 2, -123.4

// Создайте функцию parse(expr), которая принимает выражение и возвращает массив из трёх элементов:

function parse(string) {
  const regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  let answer = string.match(regexp)
  if(!answer) return [];
  answer.shift();
  return answer
}

let [a, op, b] = parse("1.2 * 3.4");

console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4

// Напишите регулярное выражение,
// которое найдёт их все в строке Java JavaScript PHP C++ C:

let regexp9 = /Java(Script)?|C(\+\+)?|PHP/g;

// Java JavaScript PHP C++ C
console.log("Java JavaScript PHP C++ C".match(regexp9));

// Найдите пары BB-кодов
let regexp10 = /\[(b|url|quote)\].*?\[\/\1]/gs;

let str10 = `
  [b]привет![/b]
  [quote]
    [url]http://ya.ru[/url]
  [/quote]
`;
console.log( str10.match(regexp10) ); // [url]http://ya.ru[/url]

// Создайте регулярное выражение для поиска строк в двойных кавычках "...".
const str11 = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
const regexp11 = /"(\\.|[^"\\])*"/g

// .. "test me" .. "Скажи \"Привет\"!" .. "\\ \"" ..
console.log(str11.match(regexp11));

// Напишите регулярное выражение, которое ищет тег <style...>.

let regexp12 = /<style(>|\s.*?>)/g;

// <style>, <style test="...">
console.log( '<style> <styler> <style test="...">'.match(regexp12) );

// Найдите неотрицательные целые

let regexp13 = /(?<![-\d])\d+/g;

let str13 = "0 12 -5 123 -18";

console.log( str13.match(regexp13) ); // 0, 12, 123

// Вставьте после фрагмента
let regexp14 = /(?<=<body.*?>)/si;

let str14 = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

str14 = str14.replace(regexp14, `<h1>Hello</h1>`);
console.log(str14)