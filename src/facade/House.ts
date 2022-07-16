import { ElectricalSystem, PlumbingSystem } from "./Systems";

export default class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();

    console.log("All systems are turned on.");
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();

    console.log("All systems are turned off.");
  }
}
