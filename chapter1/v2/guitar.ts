import { Builder } from './Builder';
import { Type } from './Type';
import { Wood } from './Wood';

export class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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
}

export class Guitar {
  private serialNumber: string;
  private price: number;
  guitarSpec: GuitarSpec;
  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood,
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.guitarSpec = new GuitarSpec(builder, model, type, backWood, topWood);
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
