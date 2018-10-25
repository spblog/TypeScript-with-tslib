import BaseClass from "./base";
import { MyItem4 } from "./script4";

export class MyItem3 extends BaseClass {
	constructor() {
        super();
    }
    async doWork(data: any) {
        console.log(new MyItem4());
        return {
            ...data
        };
    }
}