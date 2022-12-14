class Arcticle {
  constructor (title, date) {
    this.title = title,
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Arcticle("HTML", new Date(2019, 1, 1)),
  new Arcticle("CSS", new Date(2019, 0, 1)),
  new Arcticle("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Arcticle.compare);

console.log( articles[0].title )