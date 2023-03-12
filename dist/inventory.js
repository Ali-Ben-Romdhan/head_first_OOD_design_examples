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
        var matchingGuitars = [];
        for (var _i = 0, _a = this.guitars; _i < _a.length; _i++) {
            var guitar = _a[_i];
            // Ignore serial number since that's unique
            // Ignore price since that's unique
            var guitarSpec = guitar.getGuitarSpec();
            if (searchGuitar.getBuilder() !== guitarSpec.getBuilder()) {
                continue;
            }
            var model = searchGuitar.getModel().toLowerCase();
            if (model && model !== '' && model !== guitarSpec.getModel().toLowerCase()) {
                continue;
            }
            if (searchGuitar.getType() !== guitarSpec.getType()) {
                continue;
            }
            if (searchGuitar.getBackWood() !== guitarSpec.getBackWood()) {
                continue;
            }
            if (searchGuitar.getTopWood() !== guitarSpec.getTopWood()) {
                continue;
            }
            matchingGuitars.push(guitar);
        }
        return matchingGuitars;
    };
    return Inventory;
}());
exports.Inventory = Inventory;
/*
Another way of searching guitars using object literals

public search(searchGuitar: Guitar): Guitar[] {
  const matchingGuitars: Guitar[] = [];
  for (const guitar of this.guitars) {
    // Ignore serial number since that's unique
    // Ignore price since that's unique
    const matchCriteria = {
      builder: searchGuitar.getBuilder() === guitar.getBuilder(),
      model: !searchGuitar.getModel() ||
             searchGuitar.getModel().toLowerCase() === guitar.getModel().toLowerCase(),
      type: searchGuitar.getType() === guitar.getType(),
      backWood: searchGuitar.getBackWood() === guitar.getBackWood(),
      topWood: searchGuitar.getTopWood() === guitar.getTopWood()
    };
    if (Object.values(matchCriteria).every((match) => match === true)) {
      matchingGuitars.push(guitar);
    }
  }
  return matchingGuitars;
}
*/ 
//# sourceMappingURL=inventory.js.map