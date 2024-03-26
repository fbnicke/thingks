import { Thingk } from "../../entities/thingk";

export interface IThingkBehavior {
    performAction(thingk: Thingk): void;
}