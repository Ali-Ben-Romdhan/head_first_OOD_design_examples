class Remote {
  private door: DogDoor;
  constructor(door: DogDoor) {
    this.door = door;
  }
  public pressButton() {
    console.log('Pressing the remote control button...');
    if (this.door.isDoorOpen()) {
      this.door.close();
    } else {
      this.door.open();
    }
  }
}
