interface Strategy {
  calc(a: number, b: number): number;
}

class AddStrategy implements Strategy {
  calc(a: number, b: number): number {
    return a + b;
  }
}

class SubtractStrategy implements Strategy {
  calc(a: number, b: number): number {
    return a - b;
  }
}

class MultiplyStrategy implements Strategy {
  calc(a: number, b: number): number {
    return a * b;
  }
}

class DivideStrategy implements Strategy {
  calc(a: number, b: number): number {
    return a / b;
  }
}

class Calculator {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  calc(a: number, b: number): number {
    return this.strategy.calc(a, b);
  }
}

const calculator = new Calculator();

const addStrategy = new AddStrategy();
const substractStrategy = new SubtractStrategy();
const multiplyStrategy = new MultiplyStrategy();
const divideStrategy = new DivideStrategy();

// Addition
calculator.setStrategy(addStrategy);
console.log(calculator.calc(1, 2)); // 3

// Substraction
calculator.setStrategy(substractStrategy);
console.log(calculator.calc(1, 2)); // -1

// Multiplication
calculator.setStrategy(multiplyStrategy);
console.log(calculator.calc(1, 2)); // 2

// Division
calculator.setStrategy(divideStrategy);
console.log(calculator.calc(1, 2)); // -0.5
