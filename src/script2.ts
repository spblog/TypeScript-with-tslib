import BaseClass from "./base";
import { MyItem3 } from "./script3";

export class MyItem2 extends BaseClass {
	constructor() {
        super();
    }
    async doWork(data: any) {
        console.log(new MyItem3());
        return {
            ...data
        };
    }
}