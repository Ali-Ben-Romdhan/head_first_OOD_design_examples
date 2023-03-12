"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
var Guitar = /** @class */ (function () {
    function Guitar(serialNumber, price, builder, model, type, backWood, topWood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }
    Guitar.prototype.getSerialNumber = function () {
        return this.serialNumber;
    };
    Guitar.prototype.getPrice = function () {
        return this.price;
    };
    Guitar.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Guitar.prototype.getBuilder = function () {
        return this.builder;
    };
    Guitar.prototype.getModel = function () {
        return this.model;
    };
    Guitar.prototype.getType = function () {
        return this.type;
    };
    Guitar.prototype.getBackWood = function () {
        return this.backWood;
    };
    Guitar.prototype.getTopWood = function () {
        return this.topWood;
    };
    return Guitar;
}());
exports.Guitar = Guitar;
//# sourceMappingURL=guitar.js.map