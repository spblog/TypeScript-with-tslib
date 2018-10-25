import BaseClass from "./base";

export class MyItem5 extends BaseClass {
	constructor() {
        super();
    }
    async doWork(data: any) {
        return {
            ...data
        };
    }
}