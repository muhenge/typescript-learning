"use strict";
const stOne = {
    name: 'herve',
    age: 23,
    department: 'programming',
    courses(cname, marks) {
        return { cname: 'ruby', marks: 90 };
    }
};
const greeting = (st) => {
    console.log(`hello ${st.name}`);
};
greeting(stOne);
console.log(stOne.courses);
