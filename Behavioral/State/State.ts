class Writer {
  state: State;

  constructor(state: State) {
    this.changeState(state);
  }

  changeState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  write(message: string): void {
    this.state.write(message);
  }
}

abstract class State {
  context: Writer;

  setContext(context: Writer) {
    this.context = context;
  }

  abstract write(message: string): void;
}

class UppercaseState extends State {
  write(message: string): void {
    console.log(message.toUpperCase());
  }
}

class LowercaseState extends State {
  write(message: string): void {
    console.log(message.toLowerCase());
  }
}

const uppercaeState = new UppercaseState();
const lowercaseState = new LowercaseState();

const writer = new Writer(uppercaeState);
writer.write("Hello"); // HELLO

writer.changeState(lowercaseState);
writer.write("HELLo"); //hello
