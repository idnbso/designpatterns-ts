import Zombie from "./Zombie";

export default class ZombieProducer {
  produce(zombieFeatures: any) {
    const zombiePrototype = new Zombie();
    return Object.assign(zombiePrototype, zombieFeatures);
  }
}
