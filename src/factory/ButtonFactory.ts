import { Button, AndroidButton, IOSButton } from "./Buttons";

export default class ButtonFactory {
  createButton(os: string, label: string = ""): Button {
    const buttonsMap = new Map<string, Button>();
    buttonsMap.set("ios", new IOSButton(label));
    buttonsMap.set("android", new AndroidButton(label));

    if (!buttonsMap.has(os)) {
      throw new Error(`operatin system: ${os} does not exists.`);
    }

    return buttonsMap.get(os)!;
  }
}
