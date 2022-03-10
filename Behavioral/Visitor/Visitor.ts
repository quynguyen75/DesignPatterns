interface Lady {
  accept(visitor: Visitor): void;
}

interface Visitor {
  visit(lady: AmericanLady): void;
  visit(lady: VietnamLady): void;
}

class AmericanLady implements Lady {
  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

class VietnamLady implements Lady {
  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

class SayHiVisitor implements Visitor {
  visit(lady: AmericanLady): void;

  visit(lady: VietnamLady): void;

  visit(lady: any): void {
    if (lady instanceof AmericanLady) {
      console.log("Hello");
    } else {
      console.log("Xin chao");
    }
  }
}

const americanLady = new AmericanLady();
const vietnamLady = new VietnamLady();

const sayHiVisitor = new SayHiVisitor();

americanLady.accept(sayHiVisitor); // Hello
vietnamLady.accept(sayHiVisitor); // Xin chao
