export class Invoice {
    private client: string;
    readonly desc: string | number;
    amount: number;

    constructor(n:string,d:string|number,c:number){
        this.client = n;
        this.desc = d;
        this.amount = c
    }

    format(){
        return `the name = ${this.client}, description = ${this.desc}, amount = ${this.amount}`;
    }
}