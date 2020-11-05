let fs = require('fs');

//팡리에서 데이터를 읽어 들입니다.
fs.open('./output.txt', 'r', (err, fd) =>{
    if(err) throw err;
    console.dir(fd);
    
    let buf = new Buffer(10);
    console.log(`버퍼 타입 ${Buffer.isBuffer(buf)}`);
    
    fs.read(fd, buf, 0, buf.length, null, (err, bytesRead, buffer) =>{
        if(err) throw err;
        
        let inStr = buffer.toString ('utf8', 0, bytesRead);
        console.log(`파일에서 읽은 데이터 : ${inStr}`);
        
        console.log(err, bytesRead, buffer);
        
        fs.close(fd, () => {console.log('output.txt 파일을 열고 읽기 완료.')})
    })
})