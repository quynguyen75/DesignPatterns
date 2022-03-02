interface Prototype {
  clone(): Sheep;
}

class Sheep {
  constructor(public name: string, public category: string) {
    this.name = name;
    this.category = category;
  }
}

class SheepPrototype implements Prototype {
  constructor(private proto: Sheep) {
    this.proto = proto;
  }
  clone(): Sheep {
    return new Sheep(this.proto.name, this.proto.category);
  }
}

const sheep = new Sheep("Dolly", "Moutain");

const prototype = new SheepPrototype(sheep);

const clonedSheep = prototype.clone();

console.log(sheep); //Sheep { name: 'Dolly', category: 'Moutain' }
console.log(clonedSheep); //Sheep { name: 'Dolly', category: 'Moutain' }
