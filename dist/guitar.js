"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = exports.GuitarSpec = void 0;
var GuitarSpec = /** @class */ (function () {
    function GuitarSpec(builder, model, type, backWood, topWood) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }
    GuitarSpec.prototype.getBuilder = function () {
        return this.builder;
    };
    GuitarSpec.prototype.getModel = function () {
        return this.model;
    };
    GuitarSpec.prototype.getType = function () {
        return this.type;
    };
    GuitarSpec.prototype.getBackWood = function () {
        return this.backWood;
    };
    GuitarSpec.prototype.getTopWood = function () {
        return this.topWood;
    };
    return GuitarSpec;
}());
exports.GuitarSpec = GuitarSpec;
var Guitar = /** @class */ (function () {
    function Guitar(serialNumber, price, builder, model, type, backWood, topWood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.guitarSpec = new GuitarSpec(builder, model, type, backWood, topWood);
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
    Guitar.prototype.getGuitarSpec = function () {
        return this.guitarSpec;
    };
    return Guitar;
}());
exports.Guitar = Guitar;
//# sourceMappingURL=guitar.js.map