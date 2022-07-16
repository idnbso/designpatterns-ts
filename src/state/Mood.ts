interface IMoodState {
  think(): string;
}

class HappyState implements IMoodState {
  think() {
    return "I am happy :)";
  }
}

class SadState implements IMoodState {
  think() {
    return "I am sad :(";
  }
}

class NeutralState implements IMoodState {
  think() {
    return "I am neutral :|";
  }
}

export { IMoodState, HappyState, SadState, NeutralState };
