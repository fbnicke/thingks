import { StatefulBehaviors, StatelessBehaviors } from "../behaviors/thingkBehavior";
import { IThingkBehavior } from "./behaviors/iThingkBehavior";

export interface IThingk {
    name: string;
    description?: string;
    behaviors?: IThingkBehavior[];

    performActions(): void;
}

export interface ICreateThingk {
    name: string;
    description?: string;
    behaviors?: (StatelessBehaviors | StatefulBehaviors)[];
}