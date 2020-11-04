let result = 0;

console.time('duration_sum');

for(let i = 0; i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물: %d', result);
console.log(`1부터 1000까지 더한 결과물 : ${result}`);


console.time('duration2_sum');

for(let i = 0; i <= 100000; i++){
    result += i;
}

console.timeEnd('duration2_sum');
console.log(`1부터 100000까지 더한 결과물 : ${result}`);

console.log(`현재 실행한 파일의 이름 : ${__filename}`);
console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);
console.log(`현재 실행한 파일의 패스 : ${__dirname}`);

let Person = { name : 'Tigger', age : 20};
console.dir(Person);