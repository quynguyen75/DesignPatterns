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
var SMS = /** @class */ (function () {
    function SMS() {
    }
    SMS.prototype.send = function (message) {
        console.log("SMS send message: ".concat(message));
    };
    return SMS;
}());
var NotifierDecorator = /** @class */ (function () {
    function NotifierDecorator(notifier) {
        this.notifier = notifier;
    }
    NotifierDecorator.prototype.send = function (message) {
        this.notifier.send(message);
    };
    return NotifierDecorator;
}());
var SMSDecorator = /** @class */ (function (_super) {
    __extends(SMSDecorator, _super);
    function SMSDecorator(notifier) {
        return _super.call(this, notifier) || this;
    }
    SMSDecorator.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        this.sendSMS(message);
    };
    SMSDecorator.prototype.sendSMS = function (message) {
        console.log("SMS send message: ".concat(message));
    };
    return SMSDecorator;
}(NotifierDecorator));
var MessengerDecorator = /** @class */ (function (_super) {
    __extends(MessengerDecorator, _super);
    function MessengerDecorator(notifier) {
        return _super.call(this, notifier) || this;
    }
    MessengerDecorator.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        this.sendMessenger(message);
    };
    MessengerDecorator.prototype.sendMessenger = function (message) {
        console.log("Messenger send message: ".concat(message));
    };
    return MessengerDecorator;
}(NotifierDecorator));
var sms = new SMS();
var messengerDecorator = new MessengerDecorator(sms);
messengerDecorator.send("Hello");
