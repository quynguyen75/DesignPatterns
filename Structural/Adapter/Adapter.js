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
var VietnameseMoney = /** @class */ (function () {
    function VietnameseMoney() {
    }
    VietnameseMoney.prototype.pay = function (vnd) {
        console.log("Pay ".concat(vnd, "VND"));
        return vnd;
    };
    return VietnameseMoney;
}());
var AmericanMoney = /** @class */ (function () {
    function AmericanMoney() {
    }
    AmericanMoney.prototype.pay = function (usd) {
        console.log("Pay ".concat(usd, "USD"));
        return usd;
    };
    return AmericanMoney;
}());
var ConverterAdapter = /** @class */ (function (_super) {
    __extends(ConverterAdapter, _super);
    function ConverterAdapter(americanMoney) {
        var _this = _super.call(this) || this;
        _this.americanMoney = americanMoney;
        return _this;
    }
    ConverterAdapter.prototype.convertUSDtoVND = function (usd) {
        console.log("Convert usd to vnd");
        return usd * 22840;
    };
    ConverterAdapter.prototype.pay = function (usd) {
        var vnd = this.convertUSDtoVND(this.americanMoney.pay(usd));
        return _super.prototype.pay.call(this, vnd);
    };
    return ConverterAdapter;
}(VietnameseMoney));
var americanMoney = new AmericanMoney();
var converterAdapter = new ConverterAdapter(americanMoney);
converterAdapter.pay(1);
