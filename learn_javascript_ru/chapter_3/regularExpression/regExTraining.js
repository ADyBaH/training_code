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

let regexp = /#[\d\w][\d\w][\d\w][\d\w][\d\w][\d\w][\s;]/g
// better solution: /#[a-f0-9]{6}\b/gi
let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

alert( str.match(regexp) )  // #121212,#AA00ef