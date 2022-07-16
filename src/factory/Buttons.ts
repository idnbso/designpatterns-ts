abstract class Button {
  constructor(public label: string = "") {}
}

class IOSButton extends Button {}

class AndroidButton extends Button {}

export { Button, IOSButton, AndroidButton };
