import { Guitar } from "./guitar";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  public addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
  ): void {
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

  public search(searchGuitar: Guitar): Guitar | null {
    for (const guitar of this.guitars) {
      if (
        searchGuitar.getBuilder() !== "" &&
        searchGuitar.getBuilder() !== guitar.getBuilder()
      ) {
        continue;
      }

      if (
        searchGuitar.getModel() !== "" &&
        searchGuitar.getModel() !== guitar.getModel()
      ) {
        continue;
      }

      if (
        searchGuitar.getType() !== "" &&
        searchGuitar.getType() !== guitar.getType()
      ) {
        continue;
      }

      if (
        searchGuitar.getBackWood() !== "" &&
        searchGuitar.getBackWood() !== guitar.getBackWood()
      ) {
        continue;
      }

      if (
        searchGuitar.getTopWood() !== "" &&
        searchGuitar.getTopWood() !== guitar.getTopWood()
      ) {
        continue;
      }

      return guitar;
    }
    return null;
  }
}
