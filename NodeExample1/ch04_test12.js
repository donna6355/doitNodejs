let fs = require('fs');

let inname = './output.txt';
let outname = './output2.txt';

fs.exists(outname, (exists) => {
    console.log(`exist 값은 : ${exists}`);
    if(exists){
        fs.unlink(outname, (err) => {
            if(err) throw err;
            console.log(`기존 파일 ${outname} 삭제함.`);
        });
        return;
    }
    let infile = fs.createReadStream(inname, {flag: 'r'});
    let outfile = fs.createWriteStream(outname, {flag: 'w'});
    infile.pipe(outfile);
    console.log(`파일복사 [${inname}] ->[${outname}]`);
})
