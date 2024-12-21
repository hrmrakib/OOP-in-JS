// 1. Abstraction Using Classes and Methods

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

// car1.#engineStatus; // Ohh, NO 😎😎😎: SyntaxError: Private field '#prepareEngine' must be declared in an enclosing class
// car1.#prepareEngine(); // Ohh, NO 😎😎😎: SyntaxError: Private field '#prepareEngine' must be declared in an enclosing class

// 2. Abstraction Using Functions

function BankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      if (amount < 0) {
        console.log(`Invalid amount!`);
      } else {
        balance += amount;
        console.log(`Deposit: ${amount}`);
      }
    },

    getBalance() {
      console.log(`Balance: ${balance}`);
      return balance;
    },
  };
}

const myBalance = new BankAccount();
myBalance.deposit(200);
myBalance.getBalance();
console.log(myBalance.balance);
