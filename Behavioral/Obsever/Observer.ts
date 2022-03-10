interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

type FetchState = "Initial" | "Loading" | "Finished";

class FetchStatus implements Subject {
  state: FetchState;

  observers: Observer[];

  constructor() {
    this.state = "Initial";
    this.observers = [];
  }

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Observer has been attached already");
    }

    console.log("Attached observer");
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Nonexistent observer");
    }

    console.log("Subject: Detached an observer.");
    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  changeState(state: FetchState): void {
    this.state = state;
    console.log(`Fetch state changed: ${state}`);
    this.notify();
  }
}

class FinishedObserver implements Observer {
  update(subject: FetchStatus): void {
    if (subject.state === "Finished") {
      console.log("Observer:  Fetch finished");
    }
  }
}

const fetchStatus = new FetchStatus();

const finishedObserver = new FinishedObserver();

fetchStatus.attach(finishedObserver);

fetchStatus.changeState("Finished");

/**
 * Attached observer
   Fetch state changed: Finished
   Observer:  Fetch finished
 */
