interface Command {
  execute(): void;
  undo(): void;
}

// Receiver
class Fan {
  turnOn(): void {
    console.log("Turn on the Fan");
  }

  turnOff(): void {
    console.log("Turn off the Fan");
  }
}

class TurnOnCommand implements Command {
  private fan: Fan;

  constructor(fan: Fan) {
    this.fan = fan;
  }

  execute(): void {
    this.fan.turnOn();
  }

  undo(): void {
    this.fan.turnOff();
  }
}

class TurnOffCommand implements Command {
  private fan: Fan;

  constructor(fan: Fan) {
    this.fan = fan;
  }

  execute(): void {
    this.fan.turnOff();
  }

  undo(): void {
    this.fan.turnOn();
  }
}

// Invoker
class Remote {
  private turnOnCommand: Command;
  private turnOffCommand: Command;

  constructor(turnOnCommand: Command, turnOffCommand: Command) {
    this.turnOnCommand = turnOnCommand;
    this.turnOffCommand = turnOffCommand;
  }

  clickTurnOnButton() {
    this.turnOnCommand.execute();
  }

  clickTurnOffButton() {
    this.turnOffCommand.execute();
  }
}

const fan = new Fan();

const turnOnCommand = new TurnOnCommand(fan);
const turnOffCommand = new TurnOffCommand(fan);

const remote = new Remote(turnOnCommand, turnOffCommand);

remote.clickTurnOnButton(); // Turn on the fan
remote.clickTurnOffButton(); // Turn off the fan
