interface Notifier {
  send(message: string): void;
}

class SMS implements Notifier {
  send(message: string): void {
    console.log(`SMS send message: ${message}`);
  }
}

abstract class NotifierDecorator implements Notifier {
  private notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  send(message: string): void {
    this.notifier.send(message);
  }
}

class SMSDecorator extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string): void {
    super.send(message);
    this.sendSMS(message);
  }

  sendSMS(message: string): void {
    console.log(`SMS send message: ${message}`);
  }
}

class MessengerDecorator extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string): void {
    super.send(message);
    this.sendMessenger(message);
  }

  sendMessenger(message: string): void {
    console.log(`Messenger send message: ${message}`);
  }
}

const sms = new SMS();
const messengerDecorator = new MessengerDecorator(sms);

messengerDecorator.send("Hello");

/**
 * SMS send message: Hello
 * Messenger send message: Hello
 */
