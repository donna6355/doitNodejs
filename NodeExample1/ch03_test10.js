let Users = [{name:'Pooh', age:20},{name:'Tigger',age:21},{name:'Piglet', age:19}];

console.log(`배열 요소의 수 : ${Users.length}`);

for(let i = 0; i<Users.length ; i++){
    console.log(`배열의 요소 #${i} : ${Users[i].name}`);
}

console.log(`ForEach 구문 사용하기`);
Users.forEach((item, index) =>{
    console.log(`배열요소 #${index} : ${item.name}`);
})