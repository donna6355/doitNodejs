let Users = [{name:'Pooh', age:20},{name:'Tigger',age:21}];


const add = (a,b) => a + b;
Users.push(add);


console.log(`배열 요소의수 : ${Users.length}`);
console.log(`세번째 요소로 추가된 함수 실행: ${Users[2](10,20)}`);
