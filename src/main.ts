import Settings from "./singleton/Settings";
import ZombieProducer from "./prototype/ZombieProducer";
import HotDog from "./builder/HotDog";
import MobileApp from "./factory/MobileApp";
import House from "./facade/House";
import ReactiveComponent from "./proxy/ReactiveComponent";
import Range from "./iterator/Range";
import { NewsBroadcast } from "./observer/NewsBroadcast";
import { Tower, Airplane, Runway } from "./mediator/Airport";
import { Human } from "./state/Human";
import { NeutralState } from "./state/Mood";

class Main {
  testSingleton() {
    const settings = Settings.getInstance();
    console.log(settings.mode);
  }

  testPrototype() {
    const producer = new ZombieProducer();
    const zombie = producer.produce({ name: "chad" });
    console.log(zombie);
    console.log(zombie.eatBrains());
  }

  testBuilder() {
    const myLunch = new HotDog("glutten free");
    myLunch.addKetchup().addKraut().addMustard();
    console.log(myLunch);
  }

  testFactory() {
    const app = new MobileApp("android");
    app.run();
  }

  testFacade() {
    const house = new House();
    house.turnOnSystems();
    house.shutDown();
  }

  testProxy() {
    const reactive = new ReactiveComponent({ name: "jeff" });
    reactive.component.name;
    reactive.component.name = "bob";
  }

  testIterator() {
    for (const n of new Range(0, 20, 5)) {
      console.log(n);
    }
  }

  testObserver() {
    const news = new NewsBroadcast();
    news.subscribe("Den TV");
    news.subscribe("Batcave TV");
    news.subscribe("Airport TV");

    news.next("Breaking news");
    news.next("The war is over");
  }

  testMediator() {
    const runway25A = new Runway("25A");
    const runway25B = new Runway("25B");
    const runway7 = new Runway("7");

    const a771 = new Airplane("a771");
    const a772 = new Airplane("a772");
    const a773 = new Airplane("a773");

    const tower = new Tower();
    tower.confirmLanding(runway25A);
    tower.clearForLanding(runway25A, a771);
    tower.clearForLanding(runway25A, a772);

    tower.confirmLanding(runway25B);
    tower.confirmLanding(runway7);
    tower.clearForLanding(runway25B, a773);
    tower.clearForLanding(runway7, a772);
  }

  testState() {
    const john = new Human();
    console.log(john.think());
    john.changeMoodState(new NeutralState());
    console.log(john.think());
  }
}

const main = new Main();
