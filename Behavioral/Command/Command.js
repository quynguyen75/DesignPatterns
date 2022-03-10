// Receiver
var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.turnOn = function () {
        console.log("Turn on the Fan");
    };
    Fan.prototype.turnOff = function () {
        console.log("Turn off the Fan");
    };
    return Fan;
}());
var TurnOnCommand = /** @class */ (function () {
    function TurnOnCommand(fan) {
        this.fan = fan;
    }
    TurnOnCommand.prototype.execute = function () {
        this.fan.turnOn();
    };
    TurnOnCommand.prototype.undo = function () {
        this.fan.turnOff();
    };
    return TurnOnCommand;
}());
var TurnOffCommand = /** @class */ (function () {
    function TurnOffCommand(fan) {
        this.fan = fan;
    }
    TurnOffCommand.prototype.execute = function () {
        this.fan.turnOff();
    };
    TurnOffCommand.prototype.undo = function () {
        this.fan.turnOn();
    };
    return TurnOffCommand;
}());
// Invoker
var Remote = /** @class */ (function () {
    function Remote(turnOnCommand, turnOffCommand) {
        this.turnOnCommand = turnOnCommand;
        this.turnOffCommand = turnOffCommand;
    }
    Remote.prototype.clickTurnOnButton = function () {
        this.turnOnCommand.execute();
    };
    Remote.prototype.clickTurnOffButton = function () {
        this.turnOffCommand.execute();
    };
    return Remote;
}());
var fan = new Fan();
var turnOnCommand = new TurnOnCommand(fan);
var turnOffCommand = new TurnOffCommand(fan);
var remote = new Remote(turnOnCommand, turnOffCommand);
remote.clickTurnOnButton(); // Turn on the fan
remote.clickTurnOffButton(); // Turn off the fan
