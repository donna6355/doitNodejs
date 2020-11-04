let Users = [{name:'Pooh', age:20},{name:'Tigger',age:21}];

console.log(`push() 호출 전 배열 요소의 수 : ${Users.length}`);

Users.push({name:'Piglet', age:19});
console.log(`push() 호출 후 배열 요소의 수 : ${Users.length}`);

Users.pop();
console.log(`pop() 호출 후 배열 요소의 수 : ${Users.length}`);