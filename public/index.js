"use strict";
console.log('tsc testing');
const greet = () => {
    console.log('hello there!');
};
greet();
const math = (a, b, c = 10) => {
    console.log(a + b + c);
    console.log(a * b);
    console.log(c);
};
const math2 = (d, e) => {
    return d + e;
};
let ret = math2(78, 98);
console.log(`the result is ${ret}`);
math(29, 89, 90);
let test = 100;
console.log(test);
test = 'test';
console.log(test);
let funPerson = (person) => {
    console.log(`this inside object type aliases : ${person.name}`);
};
funPerson({ name: 'hello', age: 4 });
// functions
let hey;
hey = () => {
    console.log('inside hey function');
};
hey();
let high;
high = (name, greeting) => {
    console.log(`hello ${name} ${greeting}`);
};
high('herve', 'amakuru yawe');
let calc;
calc = (x, y, z) => {
    return x + y + z;
};
console.log(calc(89, 90, 130));
