//버퍼 객체를 크기만 지정하여 만든 후 문자열을 씁니다.
let output = '안녕 1!';
let buffer1 = new Buffer(10);
//크기 지정시 지정된 크기만큼만 문자열로 쓸 수 있고 넘어갈 경우 자동 삭제 ex) 안녕 12345! => 안녕 123; 남을 경우 그대로 유지;
let len = buffer1.write(output, 'utf8');
console.log(`첫번째 버퍼의 문자열 : ${buffer1.toString()}`);
console.log(`첫번째 버퍼의 길이 : ${Buffer.byteLength(buffer1)}`);

//버퍼 객체를 문자열을 이용해 만듭니다.
let buffer2 = new Buffer('안녕 일이삼사오육칠팔구십!', 'utf8');
console.log(`두 번째 버퍼의 문자열 : ${buffer2.toString()}`);
console.log(`첫번째 버퍼의 길이 : ${Buffer.byteLength(buffer2)}`);

//타입을 확인합니다.
console.log(`버퍼의 객체 타입 : ${Buffer.isBuffer(buffer1)}`);
console.dir(buffer1)

//버퍼의 객체에 들어 있는 문자열 데이터를 문자열 변수로 만듭니다.
let byteLen = Buffer.byteLength(output);
console.log(Buffer.byteLength(buffer2), buffer2.length);
let str1 = buffer1.toString('utf8', 0, byteLen);
let str2 = buffer2.toString('utf8');
console.log(`str1 : ${str1}, str2 : ${str2}`);

//첫번째 버퍼 객체의 문자열을 두번째 버퍼 객체로 복사합니다.
buffer1.copy(buffer2, buffer2.length/2, 0, len);
console.log(`두번째 버퍼에 복사한 후의 문자열 : ${buffer2.toString('utf8')}`);

//두 개의 버퍼를 붙여 줍니다.
let buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(`두개의 버퍼를 붙인 후의 문자열 : ${buffer3.toString('utf8')}`);