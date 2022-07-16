export default class Range {
  constructor(
    private start: number = 0,
    private end: number,
    private step: number = 1
  ) {}

  next() {
    if (this.start < this.end) {
      const nextIteration = { value: this.start, done: false };
      this.start += this.step;
      return nextIteration;
    }

    return { value: this.end, done: true };
  }

  [Symbol.iterator]() {
    return this;
  }
}
