export class Invoice {
    constructor(n, d, c) {
        this.client = n;
        this.desc = d;
        this.amount = c;
    }
    format() {
        return `the name = ${this.client}, description = ${this.desc}, amount = ${this.amount}`;
    }
}
