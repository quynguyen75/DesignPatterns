var WinButton = /** @class */ (function () {
    function WinButton() {
    }
    WinButton.prototype.click = function () {
        console.log("Click on WinButton");
    };
    return WinButton;
}());
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.click = function () {
        console.log("Click on MacButton");
    };
    return MacButton;
}());
var WinCheckbox = /** @class */ (function () {
    function WinCheckbox() {
    }
    WinCheckbox.prototype.toggle = function () {
        console.log("Toggle WinCheckbox");
    };
    return WinCheckbox;
}());
var MacCheckbox = /** @class */ (function () {
    function MacCheckbox() {
    }
    MacCheckbox.prototype.toggle = function () {
        console.log("Toggle MacCheckbox");
    };
    return MacCheckbox;
}());
var WinFactory = /** @class */ (function () {
    function WinFactory() {
    }
    WinFactory.prototype.createButton = function () {
        return new WinButton();
    };
    WinFactory.prototype.createCheckbox = function () {
        return new WinCheckbox();
    };
    return WinFactory;
}());
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacFactory.prototype.createCheckbox = function () {
        return new MacCheckbox();
    };
    return MacFactory;
}());
var winFactory = new WinFactory();
var winButton = winFactory.createButton();
var winCheckbox = winFactory.createCheckbox();
winButton.click(); // Click on WinButotn
winCheckbox.toggle(); // Toggle WinCheckbox
var macFactory = new MacFactory();
var macButton = macFactory.createButton(); // Click on MacButton
var macCheckbox = macFactory.createCheckbox(); // Toggle MacCheckbox
macButton.click();
macCheckbox.toggle();
