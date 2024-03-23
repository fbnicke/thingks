import { Thingk } from "../entities/thingk";
import { IThingk } from "../interfaces/iThingk";

export class ThingkFactory {
    private static instance: ThingkFactory | null = null;

    private constructor() { };

    static getInstance(): ThingkFactory {
        if (!ThingkFactory.instance) {
            ThingkFactory.instance = new ThingkFactory();
        }

        return ThingkFactory.instance;
    }

    createThingk(props: Partial<IThingk>): Thingk {
        // do validation here
        if (!props.name) {
            throw new Error("Validation failed: Name is required.")
        }


        return new Thingk(props.name, props.description);
    }
}