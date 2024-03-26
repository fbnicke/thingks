import { StatefulBehaviors, StatelessBehaviors } from "./behaviors/thingkBehavior";
import { ThingkManager } from "./manager/thingkManager"

const thingkManager = new ThingkManager();

try {
    // thingkManager.addThingk({});
    thingkManager.addThingk({ name: 'Thingk1' });
    thingkManager.addThingk({ name: 'Thingk2', description: 'I am thingk' });
    thingkManager.addThingk({ name: 'Thingk3', description: 'I am thingk', behaviors: [StatelessBehaviors.MESSAGE] });
    thingkManager.addThingk({ name: 'Advanced Thingk', description: 'I am thingk', behaviors: [StatefulBehaviors.READCOUNTER] });
    thingkManager.addThingk({ name: 'Advanced Multi Thingk', description: 'I am thingk', behaviors: [StatelessBehaviors.SIMPLE, StatefulBehaviors.READCOUNTER] });

} catch (error) {
    console.error(error);
}

const thingks = thingkManager.getAllThingks();

thingks.map(thingk => thingk.performActions());

for (let index = 0; index < 4; index++) {
    thingks[4].performActions();
}