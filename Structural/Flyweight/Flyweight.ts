class TreeType {
  name: string;
  color: string;
  texture: string;

  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }
}

class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

class TreeFactory {
  static treeTypes: TreeType[] = [];

  static getTreeType(name: string, color: string, texture: string) {
    let type = this.treeTypes.find(
      (treeType) =>
        treeType.name === name &&
        treeType.color === color &&
        treeType.texture === texture
    );

    if (type === undefined) {
      type = new TreeType(name, color, texture);
      console.log(`Create new TreeeType : {
          name: ${type.name},
          color: ${type.color},
          texture: ${type.texture}
      }`);
      this.treeTypes.push(type);
    } else {
      console.log("Use old TreeType");
    }

    return type;
  }
}

class Forest {
  private trees: Tree[];

  constructor() {
    this.trees = [];
  }

  plantTree(treeProp: {
    x: number;
    y: number;
    name: string;
    color: string;
    texture: string;
  }): void {
    const type = TreeFactory.getTreeType(
      treeProp.name,
      treeProp.color,
      treeProp.texture
    );
    const tree = new Tree(treeProp.x, treeProp.y, type);
    this.trees.push(tree);
  }
}

const forest = new Forest();

forest.plantTree({
  x: 1,
  y: 2,
  color: "Red",
  name: "Coniferous",
  texture: "Bark",
});

forest.plantTree({
  x: 2,
  y: 3,
  color: "Red",
  name: "Coniferous",
  texture: "Bark",
});

forest.plantTree({
  x: 2,
  y: 5,
  color: "Yellow",
  name: "Coniferous",
  texture: "Bark",
});

forest.plantTree({
  x: 2,
  y: 4,
  color: "Yellow",
  name: "Coniferous",
  texture: "Bark",
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
