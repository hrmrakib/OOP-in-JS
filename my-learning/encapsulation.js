// 1. Combining Data and Methods in a Class

class Programmer {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  who() {
    return `I am ${this.name} from ${this.department} department`;
  }
}

const p1 = new Programmer("Rakibul", "Development");
// console.log(p1.name, p1.department);
// console.log(p1.who());

// 2. Access Control Using Private Properties and Methods

class FetureWife {
  #wife;

  constructor(wife) {
    this.#wife = wife;
  }

  wifeName() {
    return this.#wife;
  }
}

const w1 = new FetureWife("Nowshin Aktar Era");
// console.log(w1.wifeName());

// console.log(w1.#wife); // I have GOT 😭😭😭: SyntaxError: Private field '#wife' must be declared in an enclosing class
