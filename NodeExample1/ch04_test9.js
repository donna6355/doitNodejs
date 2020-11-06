let fs = require('fs');

//파일에서 데이터를 읽어 들입니다.
fs.open('./output.txt', 'r', (err, fd) =>{
    if(err) throw err;
    console.dir(fd);
    
    let buf = new Buffer(10);
    console.log(`버퍼 타입 ${Buffer.isBuffer(buf)}`);
    
    fs.read(fd, buf, 0, buf.length, null, (err, bytesRead, buffer) =>{
    //한글은 글자당 3byte, Buffer에 지정된 바이트 크기만큼 읽어낸다. 
        if(err) throw err;
        
        let inStr = buffer.toString ('utf8', 0, bytesRead);
        console.log(`파일에서 읽은 데이터 : ${inStr}`);
        
        console.log(err, bytesRead, buffer);
        
        fs.close(fd, () => {console.log('output.txt 파일을 열고 읽기 완료.')})
    })
})