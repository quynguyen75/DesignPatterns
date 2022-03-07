interface Database {
  insert(field: string): void;
  delete(field: string): void;
}

class ConcreteDatabase implements Database {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  insert(field: string): void {
    console.log(`Inserted ${field}`);
  }

  delete(field: string): void {
    console.log(`Deleted ${field}`);
  }
}

class DatabaseProxy implements Database {
  private database: ConcreteDatabase;

  constructor(database: ConcreteDatabase) {
    this.database = database;
  }

  insert(field: string): void {
    if (this.checkAccess()) {
      this.database.insert(field);
    } else {
      console.log("Forbidden");
    }
  }

  delete(field: string): void {
    if (this.checkAccess()) {
      this.database.delete(field);
    } else {
      console.log("Forbidden");
    }
  }

  private checkAccess(): boolean {
    return this.database.token === "Test";
  }
}

const realDatabaseA = new ConcreteDatabase("Test");
const databaseProxyA = new DatabaseProxy(realDatabaseA);
databaseProxyA.insert("A"); // Insert A

const realDatabaseB = new ConcreteDatabase("Wrong");
const databaseProxyB = new DatabaseProxy(realDatabaseB);
databaseProxyB.insert("B"); // Forbidden
