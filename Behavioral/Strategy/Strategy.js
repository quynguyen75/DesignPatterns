var AddStrategy = /** @class */ (function () {
    function AddStrategy() {
    }
    AddStrategy.prototype.calc = function (a, b) {
        return a + b;
    };
    return AddStrategy;
}());
var SubtractStrategy = /** @class */ (function () {
    function SubtractStrategy() {
    }
    SubtractStrategy.prototype.calc = function (a, b) {
        return a - b;
    };
    return SubtractStrategy;
}());
var MultiplyStrategy = /** @class */ (function () {
    function MultiplyStrategy() {
    }
    MultiplyStrategy.prototype.calc = function (a, b) {
        return a * b;
    };
    return MultiplyStrategy;
}());
var DivideStrategy = /** @class */ (function () {
    function DivideStrategy() {
    }
    DivideStrategy.prototype.calc = function (a, b) {
        return a / b;
    };
    return DivideStrategy;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Calculator.prototype.calc = function (a, b) {
        return this.strategy.calc(a, b);
    };
    return Calculator;
}());
var calculator = new Calculator();
var addStrategy = new AddStrategy();
var substractStrategy = new SubtractStrategy();
var multiplyStrategy = new MultiplyStrategy();
var divideStrategy = new DivideStrategy();
// Addition
calculator.setStrategy(addStrategy);
console.log(calculator.calc(1, 2)); // 3
// Substraction
calculator.setStrategy(substractStrategy);
console.log(calculator.calc(1, 2)); // -1
// Multiplication
calculator.setStrategy(multiplyStrategy);
console.log(calculator.calc(1, 2)); // 2
// Division
calculator.setStrategy(divideStrategy);
console.log(calculator.calc(1, 2)); // -0.5
