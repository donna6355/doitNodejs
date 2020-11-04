let Users = [{name:'Pooh', age:20},{name:'Tigger',age:21}];

console.log(`unshift() 호출 전 배열 요소의 수 : ${Users.length}`);

Users.unshift({name:'Piglet', age:19});
console.log(`unshift() 호출 후 배열 요소의 수 : ${Users.length}`);

Users.shift();
console.log(`shift() 호출 후 배열 요소의 수 : ${Users.length}`);