var Invoice = /** @class */ (function () {
    function Invoice(n, d, c) {
        this.client = n;
        this.desc = d;
        this.amount = c;
    }
    Invoice.prototype.format = function () {
        return "the name = " + this.client + ", description = " + this.desc + ", amount = " + this.amount;
    };
    return Invoice;
}());
var docOne = new Invoice('herve', 'for a computer', 1500000);
var docTwo = new Invoice('evan', 'for a car', 159900000);
console.log(docOne.amount);
console.log(docOne.desc);
var allDocs = [];
allDocs.push(docOne);
allDocs.push(docTwo);
console.log(allDocs[0]);
