let http = require('http');
let fs = require('fs');

let server = http.createServer();

let port = '3000';
server.listen(port, () => console.log(`웹서버가 시작되었습니다. ${port}`));

server.on('connection', (socket) => {
    let addr = socket.address();
    console.log(`클라이언트가 접속했습니다. ${addr.address} ${addr.port}`);
});

server.on('request', (req, res) => {
    console.log(`클라이언트 요청이 들어왔습니다.`);
    
    let filename = './house.jpg';
    let infile = fs.createReadStream(filename, {flags : 'r'});
    let filelength = 0;
    let curlength = 0;
    
    fs.stat(filename, (err, stats) => {
        console.log(`stats`);
        console.dir(stats);
        filelength = stats.size;
    });
    
    //헤더 쓰기
    res.writeHead(200, {"Content-Type": "image/jpg"});
    
    //파일 내용을 스트림에서 읽어 본문 쓰기 
    infile.on('readable', () => {
        let chunk;
        while (null !== (chunk = infile.read())){
            console.log(`읽어 들인 데이터 크기 ${chunk.length}`);
            curlength += chunk.length;
            res.write(chunk, 'utf8', (err) =>{
                console.log(`파일 부분 쓰기 완료 : ${curlength}, 파일 크기: ${filelength}`);
                if(curlength >= filelength){
                    //응답 전송하기
                    res.end();
                }
            })
        }
    })
})
