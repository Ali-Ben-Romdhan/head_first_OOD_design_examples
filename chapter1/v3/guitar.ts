import { Builder } from './Builder';
import { Type } from './Type';
import { Wood } from './Wood';

export class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private numStrings: number;
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood,
    numStrings: number
  ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
    this.numStrings = numStrings;
  }

  public getBuilder(): Builder {
    return this.builder;
  }

  public getModel(): string {
    return this.model;
  }

  public getType(): string {
    return this.type;
  }

  public getBackWood(): Wood {
    return this.backWood;
  }

  public getTopWood(): Wood {
    return this.topWood;
  }

  public getNumStrings(): number {
    return this.numStrings;
  }
  matches(searchGuitar: GuitarSpec): boolean {
    if (searchGuitar.getBuilder() !== this.getBuilder()) {
      return false;
    }
    const model = searchGuitar.getModel().toLowerCase();
    if (model && model !== '' && model !== this.getModel().toLowerCase()) {
      return false;
    }
    if (searchGuitar.getType() !== this.getType()) {
      return false;
    }
    if (searchGuitar.getBackWood() !== this.getBackWood()) {
      return false;
    }
    if (searchGuitar.getTopWood() !== this.getTopWood()) {
      return false;
    }
    return true;
  }
}

export class Guitar {
  private serialNumber: string;
  private price: number;
  guitarSpec: GuitarSpec;
  constructor(serialNumber: string, price: number, guitarSpec: GuitarSpec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.guitarSpec = guitarSpec;
  }

  public getSerialNumber(): string {
    return this.serialNumber;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(newPrice: number): void {
    this.price = newPrice;
  }
  getGuitarSpec(): GuitarSpec {
    return this.guitarSpec;
  }
}
