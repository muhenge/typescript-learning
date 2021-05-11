interface isStudent {
    name:string;
    age:number;
    department:string;
    courses(c:string,grade:number): object;
}

const stOne: isStudent ={
    name:'herve',
    age:23,
    department:'programming',
    courses(cname: string, marks: number){
        return {cname:'ruby',marks:90}
    }
}

console.log(stOne.courses);
