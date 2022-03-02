interface Product {
  doStuff(): void;
}

class ConcreteProductA implements Product {
  doStuff(): void {
    console.log("Product A");
  }
}

class ConcreteProductB implements Product {
  doStuff(): void {
    console.log("Product B");
  }
}

interface Creator {
  createProduct(): Product;
}

class ConcreteCreatorA implements Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB implements Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}

const creatorA = new ConcreteCreatorA();
const productA = creatorA.createProduct();
productA.doStuff(); // Product A

const creatorB = new ConcreteCreatorB();
const productB = creatorB.createProduct();
productB.doStuff(); // Product B
