class Invoice {
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

const docOne = new Invoice('herve','for a computer', 1500000);
const docTwo = new Invoice('evan','for a car', 159900000);

console.log(docOne.amount)

console.log(docOne.desc)

let allDocs: Invoice[]=[]

allDocs.push(docOne);
allDocs.push(docTwo);

console.log(allDocs);
