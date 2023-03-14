import { Inventory } from './inventory';
import { Guitar, GuitarSpec } from './guitar';
import { Builder } from './Builder';
import { Type } from './Type';
import { Wood } from './Wood';

class FindGuitarTester {
  static main(): void {
    // Set up Rick's guitar inventory
    const inventory: Inventory = new Inventory();
    this.initializeInventory(inventory);

    const whatErinLikes: GuitarSpec = new GuitarSpec(
      Builder.FENDER,
      'Stratocastor',
      Type.ELECTRIC,
      Wood.ALDER,
      Wood.ALDER,
      1
    );

    const guitars: Guitar[] = inventory.search(whatErinLikes);
    if (guitars.length > 0) {
      guitars.forEach((guitar: Guitar) => {
        const guitarSpec = guitar.guitarSpec;
        if (guitar !== null) {
          console.log(`Erin, you might like this ${guitarSpec.getBuilder()} ${guitarSpec.getModel()} ${guitarSpec.getType()} guitar:
  ${guitarSpec.getBackWood()} back and sides,
  ${guitarSpec.getTopWood()} top.
  You can have it for only $${guitar.getPrice()}!`);
        } else {
          console.log('Sorry, Erin, we have nothing for you.');
        }
      });
    }
  }

  private static initializeInventory(inventory: Inventory): void {
    inventory.addGuitar(
      '11277',
      3999.95,
      new GuitarSpec(
        Builder.COLLINGS,
        'CJ',
        Type.ACOUSTIC,
        Wood.INDIAN_ROSEWOOD,
        Wood.SITKA,
        1
      )
    );
    inventory.addGuitar(
      'V95693',
      1499.95,
      new GuitarSpec(
        Builder.FENDER,
        'Stratocastor',
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER,
        1
      )
    );
    inventory.addGuitar(
      'V9512',
      1549.95,
      new GuitarSpec(
        Builder.FENDER,
        'Stratocastor',
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER,
        1
      )
    );
    inventory.addGuitar(
      '122784',
      5495.95,
      new GuitarSpec(
        Builder.MARTIN,
        'D-18',
        Type.ACOUSTIC,
        Wood.MAHOGANY,
        Wood.ADIRONDACK,
        1
      )
    );
    inventory.addGuitar(
      '76531',
      6295.95,
      new GuitarSpec(
        Builder.MARTIN,
        'OM-28',
        Type.ACOUSTIC,
        Wood.BRAZILIAN_ROSEWOOD,
        Wood.ADIRONDACK,
        1
      )
    );
    inventory.addGuitar(
      '70108276',
      2295.95,
      new GuitarSpec(
        Builder.GIBSON,
        'Les Paul',
        Type.ELECTRIC,
        Wood.MAHOGANY,
        Wood.MAPLE,
        1
      )
    );
    inventory.addGuitar(
      '82765501',
      1890.95,
      new GuitarSpec(
        Builder.GIBSON,
      "SG '61 Reissue",
      Type.ELECTRIC,
      Wood.MAHOGANY,
      Wood.MAHOGANY,
        1
      )
      
    );
    inventory.addGuitar(
      '77023',
      6275.95,
      new GuitarSpec(
        Builder.MARTIN,
      'D-28',
      Type.ACOUSTIC,
      Wood.BRAZILIAN_ROSEWOOD,
      Wood.ADIRONDACK,
        1
      )
      
    );
    inventory.addGuitar(
      '1092',
      12995.95,
      new GuitarSpec(
        Builder.OLSON,
      'SJ',
      Type.ACOUSTIC,
      Wood.INDIAN_ROSEWOOD,
      Wood.CEDAR,
        1
      )
      
    );
    inventory.addGuitar(
      '566-62',
      8999.95,
      new GuitarSpec(
        Builder.RYAN,
      'Cathedral',
      Type.ACOUSTIC,
      Wood.COCOBOLO,
      Wood.CEDAR,
        1
      )
      
    );
    inventory.addGuitar(
      '6 29584',
      2100.95,
      new GuitarSpec(
        Builder.PRS,
      'Dave Navarro Signature',
      Type.ELECTRIC,
      Wood.MAHOGANY,
      Wood.MAPLE,
        1
      )
      
    );
  }
}

FindGuitarTester.main();
