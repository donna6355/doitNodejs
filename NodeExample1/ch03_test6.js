let Person = {};

Person.age = 20;
Person.name = 'Tigger';
let oper = (a,b) =>{
    return a+ b;
}

Person.add = oper;

console.log(`더하기 ${Person.add(1,2)}`);