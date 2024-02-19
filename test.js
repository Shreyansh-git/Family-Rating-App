console.log('hello-world')
let name = 'Shreyansh';
let age = 23;

let person = {
    name: 'Shrey',
    age: 24
}
person.name = 'Kothari';
person['name'] = "Shreyansh Kothari";

let nameColor = ['red', 'blue'];
console.log(nameColor);

function abc(name){
    console.log('this is abc function'+ name);
}

abc(person.name);

function square(num){
    return num*num;
}
console.log(); // this is also a function call
