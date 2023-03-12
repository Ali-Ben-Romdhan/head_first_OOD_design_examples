"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var guitar_1 = require("./guitar");
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.guitars = [];
    }
    Inventory.prototype.addGuitar = function (serialNumber, price, builder, model, type, backWood, topWood) {
        var guitar = new guitar_1.Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        this.guitars.push(guitar);
    };
    Inventory.prototype.getGuitar = function (serialNumber) {
        for (var _i = 0, _a = this.guitars; _i < _a.length; _i++) {
            var guitar = _a[_i];
            if (guitar.getSerialNumber() === serialNumber) {
                return guitar;
            }
        }
        return null;
    };
    Inventory.prototype.search = function (searchGuitar) {
        for (var _i = 0, _a = this.guitars; _i < _a.length; _i++) {
            var guitar = _a[_i];
            if (searchGuitar.getBuilder() !== "" &&
                searchGuitar.getBuilder() !== guitar.getBuilder()) {
                continue;
            }
            if (searchGuitar.getModel() !== "" &&
                searchGuitar.getModel() !== guitar.getModel()) {
                continue;
            }
            if (searchGuitar.getType() !== "" &&
                searchGuitar.getType() !== guitar.getType()) {
                continue;
            }
            if (searchGuitar.getBackWood() !== "" &&
                searchGuitar.getBackWood() !== guitar.getBackWood()) {
                continue;
            }
            if (searchGuitar.getTopWood() !== "" &&
                searchGuitar.getTopWood() !== guitar.getTopWood()) {
                continue;
            }
            return guitar;
        }
        return null;
    };
    return Inventory;
}());
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.js.map