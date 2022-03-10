var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var RoboticVoice = /** @class */ (function (_super) {
    __extends(RoboticVoice, _super);
    function RoboticVoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoboticVoice.prototype.handle = function (request) {
        if (request === "Robotic") {
            return "Robotic Handler";
        }
        return _super.prototype.handle.call(this, request);
    };
    return RoboticVoice;
}(AbstractHandler));
var CustomerSupporter = /** @class */ (function (_super) {
    __extends(CustomerSupporter, _super);
    function CustomerSupporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerSupporter.prototype.handle = function (request) {
        if (request === "CustomerSupporter") {
            return "Customer Supporter Handler";
        }
        return _super.prototype.handle.call(this, request);
    };
    return CustomerSupporter;
}(AbstractHandler));
var TechnicalSupporter = /** @class */ (function (_super) {
    __extends(TechnicalSupporter, _super);
    function TechnicalSupporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnicalSupporter.prototype.handle = function (request) {
        if (request === "TechnicalSupporter") {
            return "Technical Supporter Handler";
        }
        return _super.prototype.handle.call(this, request);
    };
    return TechnicalSupporter;
}(AbstractHandler));
var roboticVoice = new RoboticVoice();
var customerSupporter = new CustomerSupporter();
var technicalSupporter = new TechnicalSupporter();
roboticVoice.setNext(customerSupporter).setNext(technicalSupporter);
console.log(roboticVoice.handle("Robotic")); // Robotic Handler
console.log(roboticVoice.handle("CustomerSupporter")); // Customer Supporter Handler
console.log(roboticVoice.handle("TechnicalSupporter")); // Technical Supporter Handler
console.log(roboticVoice.handle("Something Else")); // Null
