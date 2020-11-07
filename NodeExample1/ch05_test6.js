let http = require('http');
let fs = require('fs');

let server = http.createServer();

let port = '3000';
server.listen(port, () => console.log(`웹서버가 시작되었습니다. ${port}`));

server.on('connection', (socket) =>{
    let addr = socket.address();
    console.log(`클라이언트가 접속했습니다. ${addr.address} ${addr.port}`);
});

server.on('request', (req, res) =>{
    console.log(`클라이언트 요청이 들어왔습니다. `);
    
    let filename = './house.jpg';
    let infile = fs.createReadStream(filename, {flags: 'r'});
    
    infile.pipe(res);
    //코딩의 양은 줄었지만 헤더를 설정할 수 없는 등의 제약이 생김. 
});

server.on('close', () => console.log(`서버가 종료됩니다.`));