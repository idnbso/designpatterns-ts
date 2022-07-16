export default class Zombie {
  constructor(public name: string = "") {}

  public eatBrains() {
    return `${this.name}: yum brains`;
  }
}
