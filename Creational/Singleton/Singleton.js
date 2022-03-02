var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    };
    return Singleton;
}());
var o1 = Singleton.getInstance();
var o2 = Singleton.getInstance();
console.log(o1 === o2);
