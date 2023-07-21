const fs = require('fs');

fs.writeFile('target.txt', '', (err) => {
    if (err) {
        console.error('파일 생성 중 오류 발생:', err);
    } else {
        console.log('target.txt 파일을 변경하거나 삭제하세요.');
    }
});

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});