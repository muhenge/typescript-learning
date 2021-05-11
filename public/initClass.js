export class Invoice {
    // private client: string;
    // readonly desc: string | number;
    // amount: number;
    constructor(client, desc, amount) {
        this.client = client;
        this.desc = desc;
        this.amount = amount;
        // this.client = n;
        // this.desc = d;
        // this.amount = c
    }
    format() {
        return `the name = ${this.client}, description = ${this.desc}, amount = ${this.amount}`;
    }
}
