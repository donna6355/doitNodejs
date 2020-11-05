let fs = require('fs');

//파일에 데이터를 씁니다.
fs.open('./output.txt', 'w', (err, fd) => {
    if(err) throw err;
    console.log(fd)
    
    let buf = new Buffer('안녕!\n');
    //데이터는 필요한 만큼 Buffer 객체 안에 쓴다. 
    fs.write(fd, buf, 0, buf.length, null, (err, written, buffer)=>{
        if(err) throw err;
        
        console.log(err, written, buffer);
        
        fs.close(fd, () => console.log(`파일 열고 데이터 쓰고 파일 닫기 완료`));
    })
})