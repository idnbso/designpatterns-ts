import ButtonFactory from "./ButtonFactory";
import { Button } from "./Buttons";

export default class MobileApp {
  constructor(
    private os: string,
    private buttonFactory = new ButtonFactory()
  ) {}

  run() {
    const btn1: Button = this.buttonFactory.createButton(this.os, "click");
    const btn2: Button = this.buttonFactory.createButton(this.os, "close");

    this.render(btn1, btn2);
  }

  render(btn1: Button, btn2: Button) {
    console.log(`btn1: ${btn1.label}, btn2: ${btn2.label}`);
  }
}
