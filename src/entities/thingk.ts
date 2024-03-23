import { IThingk } from "../interfaces/iThingk";

export class Thingk implements IThingk {
    constructor(
        public name: string,
        public description?: string
    ) { }
}