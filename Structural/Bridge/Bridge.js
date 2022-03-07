var Circle = /** @class */ (function () {
    function Circle(color) {
        this.color = color;
    }
    Circle.prototype.draw = function () {
        console.log("Draw ".concat(this.color.color, " circle"));
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(color) {
        this.color = color;
    }
    Square.prototype.draw = function () {
        console.log("Draw ".concat(this.color.color, " square"));
    };
    return Square;
}());
var Red = /** @class */ (function () {
    function Red() {
        this.color = "Red";
    }
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
        this.color = "Blue";
    }
    return Blue;
}());
var blue = new Blue();
var circle = new Circle(blue);
circle.draw();
var red = new Red();
var square = new Square(red);
square.draw();
