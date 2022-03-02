var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.doStuff = function () {
        console.log("Product A");
    };
    return ConcreteProductA;
}());
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.doStuff = function () {
        console.log("Product B");
    };
    return ConcreteProductB;
}());
var ConcreteCreatorA = /** @class */ (function () {
    function ConcreteCreatorA() {
    }
    ConcreteCreatorA.prototype.createProduct = function () {
        return new ConcreteProductA();
    };
    return ConcreteCreatorA;
}());
var ConcreteCreatorB = /** @class */ (function () {
    function ConcreteCreatorB() {
    }
    ConcreteCreatorB.prototype.createProduct = function () {
        return new ConcreteProductB();
    };
    return ConcreteCreatorB;
}());
var creatorA = new ConcreteCreatorA();
var productA = creatorA.createProduct();
productA.doStuff(); // Product A
var creatorB = new ConcreteCreatorB();
var productB = creatorB.createProduct();
productB.doStuff(); // Product B
