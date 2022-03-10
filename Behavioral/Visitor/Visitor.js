var AmericanLady = /** @class */ (function () {
    function AmericanLady() {
    }
    AmericanLady.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return AmericanLady;
}());
var VietnamLady = /** @class */ (function () {
    function VietnamLady() {
    }
    VietnamLady.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return VietnamLady;
}());
var SayHiVisitor = /** @class */ (function () {
    function SayHiVisitor() {
    }
    SayHiVisitor.prototype.visit = function (lady) {
        if (lady instanceof AmericanLady) {
            console.log("Hello");
        }
        else {
            console.log("Xin chao");
        }
    };
    return SayHiVisitor;
}());
var americanLady = new AmericanLady();
var vietnamLady = new VietnamLady();
var sayHiVisitor = new SayHiVisitor();
americanLady.accept(sayHiVisitor); // Hello
vietnamLady.accept(sayHiVisitor); // Xin chao
