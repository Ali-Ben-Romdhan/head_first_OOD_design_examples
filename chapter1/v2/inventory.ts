import { Builder } from "./Builder";
import { Guitar, GuitarSpec } from "./guitar";
import { Type } from "./Type";
import { Wood } from "./Wood";


export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  public addGuitar(serialNumber: string, price: number, builder: Builder, model: string,
                   type: Type, backWood: Wood, topWood: Wood): void {
    const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
    this.guitars.push(guitar);
  }

  public getGuitar(serialNumber: string): Guitar | null {
    for (const guitar of this.guitars) {
      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }
    return null;
  }

  public search(searchGuitar: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];
    for (const guitar of this.guitars) {
      // Ignore serial number since that's unique
      // Ignore price since that's unique
      const guitarSpec = guitar.getGuitarSpec();
      if (searchGuitar.getBuilder() !== guitarSpec.getBuilder()) {
        continue;
      }
      const model = searchGuitar.getModel().toLowerCase();
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
  }
}




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