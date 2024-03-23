import { Thingk } from "../entities/thingk";
import { ThingkFactory } from "../factories/thingkFactory";
import { IThingk } from "../interfaces/iThingk";

export class ThingkManager {
    private thingks: IThingk[] = [];
    private thingkFactory: ThingkFactory;
    private groups: { [groupName: string]: Thingk[] } = {};

    constructor() {
        this.thingkFactory = ThingkFactory.getInstance();
    }

    addThingk(thingk: Partial<IThingk>): void {
        const newThingk = this.thingkFactory.createThingk(thingk);
        this.thingks.push(newThingk);
    }

    getAllThingks(): IThingk[] {
        return this.thingks;
    }

    addThingkToGroup(thingk: IThingk, groupName: string): void {
        if (!this.groups[groupName]) {
            this.groups[groupName] = [];
        }
        this.groups[groupName].push(thingk);
    }

    getThingksInGroup(groupName: string): IThingk[] {
        if (!this.groups[groupName]) {
            console.log(`Group '${groupName}' does not exist!`);
        }

        return this.groups[groupName] || [];
    }
}