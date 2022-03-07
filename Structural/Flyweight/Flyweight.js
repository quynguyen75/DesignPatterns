var TreeType = /** @class */ (function () {
    function TreeType(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    return TreeType;
}());
var Tree = /** @class */ (function () {
    function Tree(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    return Tree;
}());
var TreeFactory = /** @class */ (function () {
    function TreeFactory() {
    }
    TreeFactory.getTreeType = function (name, color, texture) {
        var type = this.treeTypes.find(function (treeType) {
            return treeType.name === name &&
                treeType.color === color &&
                treeType.texture === texture;
        });
        if (type === undefined) {
            type = new TreeType(name, color, texture);
            console.log("Create new TreeeType : {\n          name: ".concat(type.name, ",\n          color: ").concat(type.color, ",\n          texture: ").concat(type.texture, "\n      }"));
            this.treeTypes.push(type);
        }
        else {
            console.log("Use old TreeType");
        }
        return type;
    };
    TreeFactory.treeTypes = [];
    return TreeFactory;
}());
var Forest = /** @class */ (function () {
    function Forest() {
        this.trees = [];
    }
    Forest.prototype.plantTree = function (treeProp) {
        var type = TreeFactory.getTreeType(treeProp.name, treeProp.color, treeProp.texture);
        var tree = new Tree(treeProp.x, treeProp.y, type);
        this.trees.push(tree);
    };
    return Forest;
}());
var forest = new Forest();
forest.plantTree({
    x: 1,
    y: 2,
    color: "Red",
    name: "Coniferous",
    texture: "Bark"
});
forest.plantTree({
    x: 2,
    y: 3,
    color: "Red",
    name: "Coniferous",
    texture: "Bark"
});
forest.plantTree({
    x: 2,
    y: 5,
    color: "Yellow",
    name: "Coniferous",
    texture: "Bark"
});
forest.plantTree({
    x: 2,
    y: 4,
    color: "Yellow",
    name: "Coniferous",
    texture: "Bark"
});
/**
 * Create new TreeeType : {
          name: Coniferous,
          color: Red,
          texture: Bark
      }

    Use old TreeType

    Create new TreeeType : {
          name: Coniferous,
          color: Yellow,
          texture: Bark
      }

    Use old TreeType
 */
