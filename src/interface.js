var stOne = {
    name: 'herve',
    age: 23,
    department: 'programming',
    courses: function (cname, marks) {
        return { cname: 'ruby', marks: 90 };
    }
};
var greeting = function (st) {
    console.log("hello " + st.name);
};
greeting(stOne);
console.log(stOne.courses);
