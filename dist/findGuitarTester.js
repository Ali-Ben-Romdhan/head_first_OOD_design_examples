"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventory_1 = require("./inventory");
var guitar_1 = require("./guitar");
var Builder_1 = require("./Builder");
var Type_1 = require("./Type");
var Wood_1 = require("./Wood");
var FindGuitarTester = /** @class */ (function () {
    function FindGuitarTester() {
    }
    FindGuitarTester.main = function () {
        // Set up Rick's guitar inventory
        var inventory = new inventory_1.Inventory();
        this.initializeInventory(inventory);
        var whatErinLikes = new guitar_1.GuitarSpec(Builder_1.Builder.FENDER, 'Stratocastor', Type_1.Type.ELECTRIC, Wood_1.Wood.ALDER, Wood_1.Wood.ALDER);
        var guitars = inventory.search(whatErinLikes);
        if (guitars.length > 0) {
            guitars.forEach(function (guitar) {
                var guitarSpec = guitar.guitarSpec;
                if (guitar !== null) {
                    console.log("Erin, you might like this ".concat(guitarSpec.getBuilder(), " ").concat(guitarSpec.getModel(), " ").concat(guitarSpec.getType(), " guitar:\n  ").concat(guitarSpec.getBackWood(), " back and sides,\n  ").concat(guitarSpec.getTopWood(), " top.\n  You can have it for only $").concat(guitar.getPrice(), "!"));
                }
                else {
                    console.log('Sorry, Erin, we have nothing for you.');
                }
            });
        }
    };
    FindGuitarTester.initializeInventory = function (inventory) {
        inventory.addGuitar('11277', 3999.95, Builder_1.Builder.COLLINGS, 'CJ', Type_1.Type.ACOUSTIC, Wood_1.Wood.INDIAN_ROSEWOOD, Wood_1.Wood.SITKA);
        inventory.addGuitar('V95693', 1499.95, Builder_1.Builder.FENDER, 'Stratocastor', Type_1.Type.ELECTRIC, Wood_1.Wood.ALDER, Wood_1.Wood.ALDER);
        inventory.addGuitar('V9512', 1549.95, Builder_1.Builder.FENDER, 'Stratocastor', Type_1.Type.ELECTRIC, Wood_1.Wood.ALDER, Wood_1.Wood.ALDER);
        inventory.addGuitar('122784', 5495.95, Builder_1.Builder.MARTIN, 'D-18', Type_1.Type.ACOUSTIC, Wood_1.Wood.MAHOGANY, Wood_1.Wood.ADIRONDACK);
        inventory.addGuitar('76531', 6295.95, Builder_1.Builder.MARTIN, 'OM-28', Type_1.Type.ACOUSTIC, Wood_1.Wood.BRAZILIAN_ROSEWOOD, Wood_1.Wood.ADIRONDACK);
        inventory.addGuitar('70108276', 2295.95, Builder_1.Builder.GIBSON, 'Les Paul', Type_1.Type.ELECTRIC, Wood_1.Wood.MAHOGANY, Wood_1.Wood.MAPLE);
        inventory.addGuitar('82765501', 1890.95, Builder_1.Builder.GIBSON, "SG '61 Reissue", Type_1.Type.ELECTRIC, Wood_1.Wood.MAHOGANY, Wood_1.Wood.MAHOGANY);
        inventory.addGuitar('77023', 6275.95, Builder_1.Builder.MARTIN, 'D-28', Type_1.Type.ACOUSTIC, Wood_1.Wood.BRAZILIAN_ROSEWOOD, Wood_1.Wood.ADIRONDACK);
        inventory.addGuitar('1092', 12995.95, Builder_1.Builder.OLSON, 'SJ', Type_1.Type.ACOUSTIC, Wood_1.Wood.INDIAN_ROSEWOOD, Wood_1.Wood.CEDAR);
        inventory.addGuitar('566-62', 8999.95, Builder_1.Builder.RYAN, 'Cathedral', Type_1.Type.ACOUSTIC, Wood_1.Wood.COCOBOLO, Wood_1.Wood.CEDAR);
        inventory.addGuitar('6 29584', 2100.95, Builder_1.Builder.PRS, 'Dave Navarro Signature', Type_1.Type.ELECTRIC, Wood_1.Wood.MAHOGANY, Wood_1.Wood.MAPLE);
    };
    return FindGuitarTester;
}());
FindGuitarTester.main();
//# sourceMappingURL=findGuitarTester.js.map