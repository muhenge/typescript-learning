import { Invoice } from "./initClass.js";
const docOne = new Invoice('herve', 'for a computer', 1500000);
const docTwo = new Invoice('evan', 'for a car', 159900000);
console.log(docOne.amount);
console.log(docOne.desc);
let allDocs = [];
allDocs.push(docOne);
allDocs.push(docTwo);
console.log(allDocs);
