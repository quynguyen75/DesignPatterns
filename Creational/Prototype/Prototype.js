var Sheep = /** @class */ (function () {
    function Sheep(name, category) {
        this.name = name;
        this.category = category;
        this.name = name;
        this.category = category;
    }
    return Sheep;
}());
var SheepPrototype = /** @class */ (function () {
    function SheepPrototype(proto) {
        this.proto = proto;
        this.proto = proto;
    }
    SheepPrototype.prototype.clone = function () {
        return new Sheep(this.proto.name, this.proto.category);
    };
    return SheepPrototype;
}());
var sheep = new Sheep("Dolly", "Moutain");
var prototype = new SheepPrototype(sheep);
var clonedSheep = prototype.clone();
console.log(sheep); //Sheep { name: 'Dolly', category: 'Moutain' }
console.log(clonedSheep); //Sheep { name: 'Dolly', category: 'Moutain' }
