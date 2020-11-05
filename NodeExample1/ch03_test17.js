const add = (a, b, callback) =>{
    let result = a + b;
    callback(result);
    
    let count = 0;
    let history = () => {
        count++;
        return `${count} : ${a} + ${b} = ${result}`;
    }
    return history;
}

let add_history = add(10,10,(result)=>{
    console.log(`파라미터로 전달된 콜백 함수 호출됨.`);
    console.log(`더하기 (10,10) 의 결과 ${result}`);
})

console.log(`결과 값으로 받은 함수 실행 결과 : ${add_history()}`);
console.log(`결과 값으로 받은 함수 실행 결과 : ${add_history()}`);
console.log(`결과 값으로 받은 함수 실행 결과 : ${add_history()}`);


//you can access to the count though it is not global variable. Since 'history' function is made inside the 'add' function and can access. it is called closure.