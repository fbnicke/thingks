
import { Thingk } from "../entities/thingk";
import { IThingkBehavior } from "../interfaces/behaviors/iThingkBehavior";

export enum StatelessBehaviors {
    SIMPLE = 'simpleBehavior',
    MESSAGE = 'messageBehavior'
}

export enum StatefulBehaviors {
    READCOUNTER = 'readCounterBehavior'
}

export class SimpleBehavior implements IThingkBehavior {
    performAction(thingk: Thingk): void {
        console.log(`Thingk '${thingk.name}' doing ${this.constructor.name} ..`)
    }
}

export class MessageBehavior implements IThingkBehavior {
    performAction(thingk: Thingk): void {
        console.log(`Thingk '${thingk.name}' sending some message..`)
    }
}

export class ReadCounterBehavior implements IThingkBehavior {
    public executionCounter = 0;

    performAction(thingk: Thingk): void {
        console.log(`Thingk '${thingk.name}' doing ${this.constructor.name} the ${++this.executionCounter}. time!`);
    }
}
