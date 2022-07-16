import { Subject } from "rxjs";

export class NewsBroadcast {
  private broadcast = new Subject();

  subscribe(broadcaster: string) {
    this.broadcast.subscribe((message) =>
      console.log(`${message} via ${broadcaster}`)
    );
  }

  next(message: string) {
    this.broadcast.next(message);
  }
}
