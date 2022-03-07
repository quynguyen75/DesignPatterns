interface Shape {
  color: Color;
  draw(): void;
}

interface Color {
  color: string;
}

class Circle implements Shape {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  draw(): void {
    console.log(`Draw ${this.color.color} circle`);
  }
}

class Square implements Shape {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  draw(): void {
    console.log(`Draw ${this.color.color} square`);
  }
}

class Red implements Color {
  color: string;

  constructor() {
    this.color = "Red";
  }
}

class Blue implements Color {
  color: string;

  constructor() {
    this.color = "Blue";
  }
}

const blue = new Blue();
const circle = new Circle(blue);
circle.draw(); // Draw Blue circle

const red = new Red();
const square = new Square(red);
square.draw(); // Draw Red square
