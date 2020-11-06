let winston = require('winston'); //로그 처리 모듈
let winstonDaily = require('winston-daily-rotate-file'); //로그 일별 처리 모듈

let logger = winston.createLogger({ 
    level: 'debug', 
    format: winston.format.simple(), 
    transports: [ 
        new (winston.transports.Console)({ 
            colorize: true
        }), 
        new (winstonDaily)({ 
            filename: './log/server_%DATE%.log', 
            maxSize: '10m', 
            datePattern: 'YYYY-MM-DD' 
        }) ]
});

let fs = require('fs');
let inname = './output.txt';
let outname = './output2.txt';

fs.exists(outname, (exists) => { 
    if (exists) { 
        fs.unlink(outname, (err) => {
            if (err) throw err;
            logger.info(`기존 파일 [${outname}] 삭제함.`);
        }); 
    }
    
    let infile = fs.createReadStream(inname, {flags: 'r'} );
    let outfile = fs.createWriteStream(outname, {flags: 'w'});

    infile.pipe(outfile);
    logger.info(`파일 복사 [${inname}] -> [${outname}]`);
});