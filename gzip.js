const fs = require('fs');
const zlib = require('zlib'); // 파일 압축 모듈

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');

readStream.pipe(zlibStream).pipe(writeStream); // 압축 후 파일 쓰기
// 압축을 거친 후 파일을 쓰는 것이기 때문에 파일이 먼저 생성되지 않는다.