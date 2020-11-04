let Users = [{name:'Pooh', age:20}, {name:'Tigger',age:21}, {name:'Piglet', age:19}];

console.log(`delete() 호출 전 배열 요소의 수 : ${Users.length}`);

delete Users[1];
console.log(`delete 키워드로 배열 요소 삭제 후`);
console.dir(Users);

//delete로 삭제할 경우 빈 공간이 그대로 남기 때문에 혼동을 일으킬 수 있음;

Users.splice(1,0,{name:'Eeyore', age:22});
console.log(`splice()로 요소를 인덱스 1에 추가한 후`);
console.dir(Users);

Users.splice(2,1);
console.log(`splice()로 요소를 인덱스 2의 요소를 1개 삭제한 후`);
console.dir(Users);