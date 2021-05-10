console.log('tsc testing')


const greet = ()=>{
    console.log('hello there!')
}

greet();

const math = (a:number,b:number, c:number = 10)=>{
    console.log(a+b+c);
    console.log(a*b);
    console.log(c);
}

const math2 = (d:number,e:number) => {
    return d + e;
}

let ret = math2(78,98);

console.log(`the result is ${ret}`)

math(29,89,90);