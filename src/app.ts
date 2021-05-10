let body = document.querySelector('body')!;
console.log(body)

let divOne = document.createElement('div')
body.appendChild(divOne);

divOne.setAttribute("id","root")

const testForm = document.querySelector('.test-form') as HTMLFormElement;

console.log(testForm)