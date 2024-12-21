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

  honest() {
    console.log(`${this.name} is honest and intelligent`);
  }
}

const father1 = new Father("Abdul");
father1.honest();

const son1 = new Son("Babul", 23);
son1.honest();
