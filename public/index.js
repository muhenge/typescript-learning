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
