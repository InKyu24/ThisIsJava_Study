const fs = require('fs');

fs.readFile('readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // 버퍼 출력
    console.log(data.toString()); // 문자열 출력
});