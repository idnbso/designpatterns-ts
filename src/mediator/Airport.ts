class Airplane {
  constructor(public name: string = "") {}
  land() {}
}

class Runway {
  constructor(public name: string = "") {}
  public clear: boolean = false;
}

class Tower {
  clearForLanding(runway: Runway, plane: Airplane) {
    if (runway.clear) {
      console.log(
        `Plane ${plane.name} is clear for landing on runway ${runway.name}.`
      );
      runway.clear = false;
      return;
    }

    console.log(`Runway ${runway.name} is not confirmed clear for landing.`);
  }

  confirmLanding(runway: Runway) {
    runway.clear = true;
  }
}

export { Tower, Runway, Airplane };
