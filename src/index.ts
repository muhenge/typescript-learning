console.log('tsc testing')


const greet = ()=>{
    console.log('hello there!')
}

greet();

const math = (a:number,b:number, c:number = 10) => {
    console.log(a+b+c);
    console.log(a*b);
    console.log(c);
}

const math2 = (d:number,e:number):number => {
    return d + e;
}

let ret = math2(78,98);

console.log(`the result is ${ret}`)

math(29,89,90);

// type aliases variables

type strNum = string | number;

let test: strNum = 100

console.log(test);

test = 'test';

console.log(test)

// type aliases objects
type obj = { name:strNum, age:number }

let funPerson = (person:obj) => {
    console.log(`this inside object type aliases : ${person.name}`)
}

funPerson({name:'hello',age:4})

// functions

let hey: Function;

hey = () =>{
    console.log('inside hey function')
}

hey();

let high:(a:string, b:string) => void

high = (name:string,greeting:string) => {
    console.log(`hello ${name} ${greeting}`)
}

high('herve','amakuru yawe');

let calc:(a:number,b:number,c:number) => number 

calc = (x:number,y:number,z:number) => {
    return x+y+z;
}

console.log(calc(89,90,130))