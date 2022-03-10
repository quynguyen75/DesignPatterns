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
var Writer = /** @class */ (function () {
    function Writer(state) {
        this.changeState(state);
    }
    Writer.prototype.changeState = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    Writer.prototype.write = function (message) {
        this.state.write(message);
    };
    return Writer;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var UppercaseState = /** @class */ (function (_super) {
    __extends(UppercaseState, _super);
    function UppercaseState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UppercaseState.prototype.write = function (message) {
        console.log(message.toUpperCase());
    };
    return UppercaseState;
}(State));
var LowercaseState = /** @class */ (function (_super) {
    __extends(LowercaseState, _super);
    function LowercaseState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowercaseState.prototype.write = function (message) {
        console.log(message.toLowerCase());
    };
    return LowercaseState;
}(State));
var uppercaeState = new UppercaseState();
var lowercaseState = new LowercaseState();
var writer = new Writer(uppercaeState);
writer.write("Hello"); // HELLO
writer.changeState(lowercaseState);
writer.write("HELLo"); //hello
