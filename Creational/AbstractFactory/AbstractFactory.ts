interface Button {
  click(): void;
}

interface Checkbox {
  toggle(): void;
}

class WinButton implements Button {
  click(): void {
    console.log("Click on WinButton");
  }
}

class MacButton implements Button {
  click(): void {
    console.log("Click on MacButton");
  }
}

class WinCheckbox implements Checkbox {
  toggle(): void {
    console.log("Toggle WinCheckbox");
  }
}

class MacCheckbox implements Checkbox {
  toggle(): void {
    console.log("Toggle MacCheckbox");
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

const winFactory = new WinFactory();

const winButton = winFactory.createButton();
const winCheckbox = winFactory.createCheckbox();

winButton.click(); // Click on WinButotn
winCheckbox.toggle(); // Toggle WinCheckbox

const macFactory = new MacFactory();

const macButton = macFactory.createButton(); // Click on MacButton
const macCheckbox = macFactory.createCheckbox(); // Toggle MacCheckbox

macButton.click();
macCheckbox.toggle();
