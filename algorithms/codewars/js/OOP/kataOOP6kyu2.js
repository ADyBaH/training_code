/*
Create different shapes that can be part of a sortable list.
The sort order is based on the size of their respective areas:
example:
  let side = 1.1234;
  let radius = 1.1234;
  let base = 5;
  let height = 2;

  let shapes = [ new Square(side)
              , new Circle(radius)
              , new Triangle(base, height)
              ];
  shapes.sort( (a,b) => Number(a>b)-Number(a<b) );
*/
class Shape {
  constructor(area) {
    this.area = area;
  }
  valueOf = () => this.area;
}

class Square extends Shape{
  constructor(size) {
    super(size)
    this.area = size ** 2;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super(width)
    this.area = width * height;
  }
}
class Triangle extends Shape {
  constructor(width, height) {
    super(width)
    this.area = width * height / 2;
  }
}
class Circle extends Shape {
  constructor(width) {
    super(width)
    this.area = width * width * Math.PI;
  }
}
class CustomShape extends Shape {
  constructor(width) {
    super(width)
  }
}