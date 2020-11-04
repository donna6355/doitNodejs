let Person = {};

Person.age = 20;
Person.name = 'Tigger';
Person.add = (a,b) =>{
    return a+ b;
}

console.log(`더하기 ${Person.add(1,2)}`);