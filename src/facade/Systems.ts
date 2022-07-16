interface ISystem {
  turnOn(): void;
  turnOff(): void;
}

class PlumbingSystem implements ISystem {
  turnOn(): void {}
  turnOff(): void {}
  setPressure(p: number) {
    console.log(`Pressure: ${p}`);
  }
}

class ElectricalSystem implements ISystem {
  turnOn(): void {}
  turnOff(): void {}
  setVoltage(v: number) {
    console.log(`Voltage: ${v}`);
  }
}

export { PlumbingSystem, ElectricalSystem };
