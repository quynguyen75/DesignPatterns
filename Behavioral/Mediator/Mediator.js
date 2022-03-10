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
var AbstractUser = /** @class */ (function () {
    function AbstractUser(chatMediator, name) {
        this.chatMediator = chatMediator;
        this.name = name;
    }
    return AbstractUser;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.send = function (message) {
        console.log("".concat(this.name, " sending message: ").concat(message));
        this.chatMediator.send(message, this);
    };
    User.prototype.receive = function (message) {
        console.log("".concat(this.name, " received message: ").concat(message));
    };
    return User;
}(AbstractUser));
var ChatMediatorImpl = /** @class */ (function () {
    function ChatMediatorImpl() {
        this.users = [];
    }
    ChatMediatorImpl.prototype.send = function (message, messageAuthor) {
        this.users.forEach(function (user) {
            if (user !== messageAuthor) {
                user.receive(message);
            }
        });
    };
    ChatMediatorImpl.prototype.addUser = function (user) {
        console.log("".concat(user.name, " joined"));
        this.users.push(user);
        return this;
    };
    return ChatMediatorImpl;
}());
var chatMediator = new ChatMediatorImpl();
var userA = new User(chatMediator, "A");
var userB = new User(chatMediator, "B");
var userC = new User(chatMediator, "C");
var userD = new User(chatMediator, "D");
chatMediator.addUser(userA).addUser(userB).addUser(userC).addUser(userD);
userA.send("Hello");
