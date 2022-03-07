var ConcreteDatabase = /** @class */ (function () {
    function ConcreteDatabase(token) {
        this.token = token;
    }
    ConcreteDatabase.prototype.insert = function (field) {
        console.log("Inserted ".concat(field));
    };
    ConcreteDatabase.prototype["delete"] = function (field) {
        console.log("Deleted ".concat(field));
    };
    return ConcreteDatabase;
}());
var DatabaseProxy = /** @class */ (function () {
    function DatabaseProxy(database) {
        this.database = database;
    }
    DatabaseProxy.prototype.insert = function (field) {
        if (this.checkAccess()) {
            this.database.insert(field);
        }
        else {
            console.log("Forbidden");
        }
    };
    DatabaseProxy.prototype["delete"] = function (field) {
        if (this.checkAccess()) {
            this.database["delete"](field);
        }
        else {
            console.log("Forbidden");
        }
    };
    DatabaseProxy.prototype.checkAccess = function () {
        return this.database.token === "Test";
    };
    return DatabaseProxy;
}());
var realDatabaseA = new ConcreteDatabase("Test");
var databaseProxyA = new DatabaseProxy(realDatabaseA);
databaseProxyA.insert("A"); // Insert A
var realDatabaseB = new ConcreteDatabase("Wrong");
var databaseProxyB = new DatabaseProxy(realDatabaseB);
databaseProxyB.insert("B"); // Forbidden
