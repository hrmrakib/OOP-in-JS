class Father {
  constructor(name) {
    this.name = name;
  }

  honest() {
    console.log(`${this.name} is honest`);
  }
}

class Son extends Father {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  intelligent() {
    console.log(`${this.name} is intelligent`);
  }
}

const son1 = new Son("Rakibul", 23);
son1.honest();
