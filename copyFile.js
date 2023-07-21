const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt') // fs.copyFile(복사할 대상, 복사될 경로)
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });