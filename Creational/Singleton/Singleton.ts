class Singleton {
  private static instance: Singleton;
  private constructor() {}
  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const o1 = Singleton.getInstance();
const o2 = Singleton.getInstance();

console.log(o1 === o2); // true
