class DogDoor {
  private isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  public open(): void {
    console.log("The dog door opens.");
    this.isOpen = true;
  }

  public close(): void {
    console.log("The dog door closes.");
    this.isOpen = false;
  }

  public isDoorOpen(): boolean {
    return this.isOpen;
  }
}
