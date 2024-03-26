import { IThingkBehavior } from "../interfaces/behaviors/iThingkBehavior";
import { IThingk } from "../interfaces/iThingk";

export class Thingk implements IThingk {
    constructor(
        public name: string,
        public description?: string,
        public behaviors?: IThingkBehavior[]
    ) { }

    performActions(): void {
        this.behaviors?.map(b => b.performAction(this));
    }
}