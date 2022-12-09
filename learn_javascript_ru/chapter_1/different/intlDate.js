let date = new Date(2014, 11, 31, 12, 30, 0);

let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(formatter.format(date));

formatter = new Intl.DateTimeFormat("en-US");
console.log(formatter.format(date));
