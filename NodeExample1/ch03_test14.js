let Users = [{name:'Pooh', age:20}, {name:'Tigger',age:21}, {name:'Piglet', age:19},{name:'Eeyore', age:22}];

console.log(`배열 요소의 수 : ${Users.length}`);
console.log(`원본 Users`);
console.dir(Users);

let Users2 = Users.slice(1,3);
console.log(`slice()로 잘라낸 후 Users2`);
console.dir(Users2);

let Users3 = Users2.slice(1);
console.log(`slice()로 잘라낸 후 Users3`);
console.dir(Users3);