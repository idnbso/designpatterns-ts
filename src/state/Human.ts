import { IMoodState, HappyState } from "./Mood";

export class Human {
  state: IMoodState;

  constructor() {
    this.state = new HappyState();
  }

  think() {
    return this.state.think();
  }

  changeMoodState(state: IMoodState) {
    this.state = state;
  }
}
