import { ThingkManager } from "./manager/thingkManager"

const thingkManager = new ThingkManager();

try {
    // thingkManager.addThingk({});
    thingkManager.addThingk({ name: 'Thingk1' });
    thingkManager.addThingk({ name: 'Thingk2', description: 'I am thingk' });

    const thingks = thingkManager.getAllThingks();

    thingks.map(thingk => {
        thingkManager.addThingkToGroup(thingk, 'MyGroup');
    })
} catch (error) {
    console.error(error);
}


console.log(thingkManager.getThingksInGroup('MyGroup'))
