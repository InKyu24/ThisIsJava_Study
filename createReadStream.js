const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // 16바이트씩 읽음
const data = [];

readStream.on('data', (chunk) => { // 16바이트씩 읽어서 chunk에 담음
    data.push(chunk); // data 배열에 chunk를 넣음
    console.log('data: ', chunk, '길이: ', chunk.length);
});

readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error:', err);
});