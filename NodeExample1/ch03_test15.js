const add = (a, b, callback) =>{
    let result = a + b;
    callback(result);
}

add(10,10,(result)=>{
    console.log(`파라미터로 전달된 콜백 함수 호출됨.`);
    console.log(`더하기 (10,10) 의 결과 ${result}`);
})