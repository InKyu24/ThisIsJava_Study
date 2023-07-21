const fs = require('fs');

console.log('before', process.memoryUsage().rss); // 데이터 쓰기 전 메모리 사용량

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');

readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss); // 데이터 쓰고 난 후 메모리 사용
});