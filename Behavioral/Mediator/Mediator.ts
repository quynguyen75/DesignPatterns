interface ChatMediator {
  send(message: string, user: User): void;
  addUser(user: User): this;
}

abstract class AbstractUser {
  chatMediator: ChatMediator;
  name: string;

  constructor(chatMediator: ChatMediator, name: string) {
    this.chatMediator = chatMediator;
    this.name = name;
  }

  abstract send(message: string): void;

  abstract receive(message: string): void;
}

class User extends AbstractUser {
  send(message: string): void {
    console.log(`${this.name} sending message: ${message}`);
    this.chatMediator.send(message, this);
  }

  receive(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

class ChatMediatorImpl implements ChatMediator {
  private users: User[];

  constructor() {
    this.users = [];
  }

  send(message: string, messageAuthor: User): void {
    this.users.forEach((user) => {
      if (user !== messageAuthor) {
        user.receive(message);
      }
    });
  }

  addUser(user: User): this {
    console.log(`${user.name} joined`);
    this.users.push(user);

    return this;
  }
}

const chatMediator = new ChatMediatorImpl();

const userA = new User(chatMediator, "A");
const userB = new User(chatMediator, "B");
const userC = new User(chatMediator, "C");
const userD = new User(chatMediator, "D");

chatMediator.addUser(userA).addUser(userB).addUser(userC).addUser(userD);

userA.send("Hello");

/**
 * A joined
   B joined
   C joined
   D joined
   A sending message: Hello
   B received message: Hello
   C received message: Hello
   D received message: Hello
 */
