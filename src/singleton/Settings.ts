export default class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  // prevent instantiating a new object with a private constructor
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}
