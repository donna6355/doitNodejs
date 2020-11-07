let http = require('http');

//웹서버 객체를 만듭니다
let server = http.createServer();

//웹서버를 시작하여 3000번 포트에서 대기합니다.
//let port = 3000;
//server.listen(port, () => console.log(`웹서버가 시작되었습니다. ${port}`));

//웹서버를 시작하여 192.168.0.5 IP와 3000번 포트에서 대기하도록 설정합니다. 
//cmd % ipconfig /all로 사용중인 PC의 IP 확인
let host = '192.168.0.5';
let port = 3000;
server.listen(port, host, '50000', () => console.log(`웹서버가 시작되었습니다. : ${host} ${port}`));