class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposit ${amount} & Current Balance ${this.#balance}`);
  }

  getBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}

const n1 = new BankAccount(200);

n1.deposit(25);
