interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class RoboticVoice extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "Robotic") {
      return "Robotic Handler";
    }
    return super.handle(request);
  }
}

class CustomerSupporter extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "CustomerSupporter") {
      return "Customer Supporter Handler";
    }
    return super.handle(request);
  }
}

class TechnicalSupporter extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "TechnicalSupporter") {
      return "Technical Supporter Handler";
    }
    return super.handle(request);
  }
}

const roboticVoice = new RoboticVoice();
const customerSupporter = new CustomerSupporter();
const technicalSupporter = new TechnicalSupporter();

roboticVoice.setNext(customerSupporter).setNext(technicalSupporter);

console.log(roboticVoice.handle("Robotic")); // Robotic Handler
console.log(roboticVoice.handle("CustomerSupporter")); // Customer Supporter Handler
console.log(roboticVoice.handle("TechnicalSupporter")); // Technical Supporter Handler
console.log(roboticVoice.handle("Something Else")); // Null
