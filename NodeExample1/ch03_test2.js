let Person = {};

Person['age'] = 20;
Person['name'] = 'Tigger';
Person.mobile = '010-1234-5678';

console.log(`나이 : ${Person.age}`);
//console.log(`이름 : ${Person[name]}`);
console.log(`이름 : ${Person['name']}`);
console.log(`번호 : ${Person['mobile']}`);
console.log(Person);