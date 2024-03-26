import { MessageBehavior, ReadCounterBehavior, SimpleBehavior, StatefulBehaviors, StatelessBehaviors } from "../behaviors/thingkBehavior";
import { Thingk } from "../entities/thingk";
import { IThingkBehavior } from "../interfaces/behaviors/iThingkBehavior";
import { ICreateThingk, IThingk } from "../interfaces/iThingk";

export class ThingkFactory {
    private static instance: ThingkFactory | null = null;

    // stateless behaviors can be re-used, so take one instance each
    private simpleBehavior = new SimpleBehavior();
    private messageBehavior = new MessageBehavior();

    private constructor() { };

    static getInstance(): ThingkFactory {
        if (!ThingkFactory.instance) {
            ThingkFactory.instance = new ThingkFactory();
        }

        return ThingkFactory.instance;
    }

    createThingk(props: ICreateThingk): Thingk {
        // do validation here
        if (!props.name) {
            throw new Error("Validation failed: Name is required.")
        }

        const behaviors: IThingkBehavior[] = [];
        props.behaviors?.map(b => {
            if (b == StatelessBehaviors.SIMPLE) behaviors.push(this.simpleBehavior);
            if (b == StatelessBehaviors.MESSAGE) behaviors.push(this.messageBehavior);

            if (b == StatefulBehaviors.READCOUNTER) behaviors.push(new ReadCounterBehavior());
        })

        return new Thingk(props.name, props.description, behaviors);
    }
}