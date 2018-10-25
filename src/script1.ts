import BaseClass from "./base";
import { MyItem2 } from "./script2";

export class MyItem1 extends BaseClass {
	constructor() {
        super();
    }
    async doWork(data: any) {
        console.log(new MyItem2());
        
        return {
            ...data
        };
    }
}