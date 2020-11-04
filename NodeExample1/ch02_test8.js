let path = require('path');

//디렉토리 이름 합치기; 배열 메소드 이용
let directories = ["users", "mike", "docs"];
let docsDirectory = directories.join(path.sep);
//path.sep : path seperator '\'
console.log(`무선 디렉토리 : ${docsDirectory}`);

//디렉토리 이름과 파일 이름 합치기
let curPath = path.join('/Users/mike', 'notepad.exe');
console.log(`파일 패스: ${curPath}`);

//패스에서 디렉토리, 파일 이름, 확장자 구별하기
let filename = "C:\\Users\\mike\\notepad.exe";
let dirname = path.dirname(filename);
let basename = path.basename(filename);
let extname = path.extname(filename);

console.log(`디렉토리 : ${dirname}, 파일 이름 : ${basename}, 확장자 : ${extname}`);