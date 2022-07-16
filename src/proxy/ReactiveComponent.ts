export default class ReactiveComponent {
  public component;

  constructor(component: any) {
    this.component = new Proxy(component, {
      get(target, key) {
        console.log(`Tracking prop: ${key.toString()}`);
        return target[key];
      },

      set(target, key, value) {
        console.log(
          `Updating UI for prop '${key.toString()}' with new value: ${value}`
        );
        return Reflect.set(target, key, value);
      },
    });
  }
}
