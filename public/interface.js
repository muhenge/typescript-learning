"use strict";
const stOne = {
    name: 'herve',
    age: 23,
    department: 'programming',
    courses(cname, marks) {
        return { cname: 'ruby', marks: 90 };
    }
};
console.log(stOne.courses);
