import BaseClass from "./base";
import { MyItem5 } from "./script5";

export class MyItem4 extends BaseClass {
	constructor() {
        super();
    }
    async doWork(data: any) {
        console.log(new MyItem5());
        return {
            ...data
        };
    }
}