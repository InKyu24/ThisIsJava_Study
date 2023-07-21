const fs = require('fs');

console.log('before', process.memoryUsage().rss); // 데이터 쓰기 전 메모리 사용량

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1); // big.txt를 읽어서 big2.txt에 씀
console.log('buffer: ', process.memoryUsage().rss); // 데이터 쓰고 난 후 메모리 사용량