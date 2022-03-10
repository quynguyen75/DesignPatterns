var FetchStatus = /** @class */ (function () {
    function FetchStatus() {
        this.state = "Initial";
        this.observers = [];
    }
    FetchStatus.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log("Observer has been attached already");
        }
        console.log("Attached observer");
        this.observers.push(observer);
    };
    FetchStatus.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Nonexistent observer");
        }
        console.log("Subject: Detached an observer.");
        this.observers.splice(observerIndex, 1);
    };
    FetchStatus.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    FetchStatus.prototype.changeState = function (state) {
        this.state = state;
        console.log("Fetch state changed: ".concat(state));
        this.notify();
    };
    return FetchStatus;
}());
var FinishedObserver = /** @class */ (function () {
    function FinishedObserver() {
    }
    FinishedObserver.prototype.update = function (subject) {
        if (subject.state === "Finished") {
            console.log("Observer:  Fetch finished");
        }
    };
    return FinishedObserver;
}());
var fetchStatus = new FetchStatus();
var finishedObserver = new FinishedObserver();
fetchStatus.attach(finishedObserver);
fetchStatus.changeState("Finished");
/**
 * Attached observer
   Fetch state changed: Finished
   Observer:  Fetch finished
 */
