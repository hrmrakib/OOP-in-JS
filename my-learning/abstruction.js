class Car {
  #engineStatus = false;

  enginerOn() {
    this.#prepareEngine();
    this.#engineStatus = true;
    console.log("Engine is on");
  }

  #prepareEngine() {
    console.log("Checking fuel and systems .....");
  }

  enginerOff() {
    this.#prepareEngine();
    this.#engineStatus = false;
    console.log("Engine is Off");
  }
}

const car1 = new Car();

// car1.enginerOff();
// car1.enginerOn();

car1.#engineStatus;
// car1.#prepareEngine(); // Ohh, NO 😎😎😎: SyntaxError: Private field '#prepareEngine' must be declared in an enclosing class
